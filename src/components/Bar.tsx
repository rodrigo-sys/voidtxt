import { basename, extname, join } from "@tauri-apps/api/path";
import { remove, rename, writeTextFile } from "@tauri-apps/plugin-fs";
import { useNavigate } from "react-router-dom";
import { NoteContext } from "../noteContext";
import { useContext } from "react";
import { exitApp } from "tauri-plugin-app-exit-api";
import '../styles/Bar.css'
import { PromptContext } from "../contexts/PromptContext";
import ButtonBar from "./ButtonBar";

function Bar() {
  const navigate = useNavigate()
  const promptContext = useContext(PromptContext);
  const noteContext = useContext(NoteContext);

  function newNote() {
    navigate('/note?filename=&content=')
  }

  function showNotesList() {
    navigate('/notes')
  }


  function quitApp() {
    exitApp().catch(error => {
      console.log(error)
    })
  }

  async function saveNote(): Promise<void> {
    if (!noteContext) return;
    const { content, baseDir, fileName, setFileName } = noteContext;

    const hasFileName = !!fileName;
    
    let note_filename: string;

    if (!hasFileName) {
      note_filename = await promptContext?.showPromptAsync() || '';
      if (note_filename) {
        note_filename += '.md';
        setFileName(note_filename);
      }
    } else {
      note_filename = fileName;
    }

    if (note_filename) {
      const note_path = await join(baseDir, note_filename);
      await writeTextFile(note_path, content);
    }
  }

  return (
    <div className='toolbar' role='toolbar'>
      <ButtonBar onClick={saveNote}>[save]</ButtonBar>
      <ButtonBar onClick={newNote}>[new]</ButtonBar>
      <ButtonBar onClick={showNotesList}>[list]</ButtonBar>
      <ButtonBar onClick={quitApp}>[quit]</ButtonBar>
    </div >
  )
}

export default Bar;
