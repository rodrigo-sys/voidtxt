import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NoteEditorPage from "./pages/NoteEditorPage";
import RootLayout from "./pages/layouts/RootLayout";
import { List } from "./components/List";
import { convertFileSrc } from "@tauri-apps/api/core";
import { appLocalDataDir, join } from "@tauri-apps/api/path";
import { exists, mkdir } from "@tauri-apps/plugin-fs";

function App() {
  const navigate = useNavigate();

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

    if (import.meta.env.DEV) {
      async function addSamplesNotes() {
        const { createSampleNotes, clearNotesDirectory } = await import("./utils/dev/dev");
        await clearNotesDirectory();
        await createSampleNotes();
        return
      }
      addSamplesNotes();

      async function setupShortcuts() {
        const { setupDevKeyboardShortcuts } = await import('./utils/dev/keyboardShortcuts');
        await setupDevKeyboardShortcuts(navigate);
      }
      setupShortcuts();
    }

  }, [])

  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path='/' element={<NoteEditorPage />} />
        <Route path='/note' element={<NoteEditorPage />} />
        <Route path='/notes' element={<List />} />
        <Route path='/scratch' element={<Navigate to='/note?filename=scratch.md' />} />
      </Route>
    </Routes>
  )
}

export default App;
