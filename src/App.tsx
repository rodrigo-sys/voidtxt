import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NoteEditorPage from "./pages/NoteEditorPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/note' element={<NoteEditorPage/>} />
    </Routes>
  )
}

export default App;
