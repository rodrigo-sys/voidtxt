import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NoteEditorPage from "./pages/NoteEditorPage";
import RootLayout from "./pages/layouts/RootLayout";
import { List } from "./components/List";
import { convertFileSrc } from "@tauri-apps/api/core";
import { appLocalDataDir, join } from "@tauri-apps/api/path";
import { exists, mkdir } from "@tauri-apps/plugin-fs";

function App() {
  useEffect(() => {
    async function setBackgroundImage() {
      const image_path = await join(await appLocalDataDir(), 'background-image')
      if (!(await exists(image_path))) { return }
      const image_url = convertFileSrc(image_path)
      document.documentElement.style.setProperty('--app-image', `url("${image_url}")`)
    }
    setBackgroundImage()

    async function createNotesDir() {
      const notes_path = await join(await appLocalDataDir(), 'notes')
      if ((await exists(notes_path))) { return }
      mkdir(notes_path)
    }
    createNotesDir()

  }, [])

  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/note' element={<NoteEditorPage />} />
        <Route path='/notes' element={<List />} />
        <Route path='/scratch' element={<Navigate to='/note?filename=scratch.md' />} />
      </Route>
    </Routes>
  )
}

export default App;
