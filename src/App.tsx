import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NoteEditorPage from "./pages/NoteEditorPage";
import RootLayout from "./pages/layouts/RootLayout";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout/>}>
        <Route path='/' element={<Home />} />
        <Route path='/note' element={<NoteEditorPage />} />
      </Route>
    </Routes>
  )
}

export default App;
