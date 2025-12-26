import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NoteEditorPage from "./pages/NoteEditorPage";
import RootLayout from "./pages/layouts/RootLayout";
import { List } from "./components/List";

function App() {
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
