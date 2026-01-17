import { basename, extname, join } from "@tauri-apps/api/path";
import { remove, rename, writeTextFile } from "@tauri-apps/plugin-fs";
import { useNavigate } from "react-router-dom";
import { NoteContext } from "../noteContext";
import { useContext } from "react";
import { exitApp } from "tauri-plugin-app-exit-api";
import '../styles/Bar.css'
import { PromptContext } from "../contexts/PromptContext";
import ButtonBar from "./ButtonBar";
import { ask } from "@tauri-apps/plugin-dialog";
import { ListIcon, PencilLine, Plus, Save, Trash2, X } from "lucide-react";

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

  async function deleteNote() {
    if (!noteContext) { return; }

    const hasFileName = !!noteContext.fileName;
    if (!hasFileName) { return }

    const confirmation = await ask('Are you sure you want to delete this note? This action cannot be undone.', {
      title: 'Remove note',
      kind: 'warning',
    });

    if (confirmation) {
      const note_path = await join(noteContext.baseDir, noteContext.fileName);
      await remove(note_path)
    }

    navigate('/note?filename=&content=')
  }

  async function renameNote() {
    // Validate that we have a note to rename
    if (!noteContext) {
      console.warn('No note context available');
      return;
    }

    if (!noteContext.fileName) {
      console.warn('Current note has no filename to rename');
      return;
    }

    try {
      // Extract file extension and base name
      const fileExtension = await extname(noteContext.fileName);
      const baseFileName = await basename(noteContext.fileName, '.' + fileExtension);

      // Set up rename prompt with current name (without extension)
      promptContext?.setPromptText(baseFileName);

      // Get new filename from user
      const newBaseName = await promptContext?.showPromptAsync() || '';
      if (!newBaseName.trim()) {
        return; // User cancelled or entered empty name
      }

      // Reconstruct full filename with original extension
      const newFileName = `${newBaseName}.${fileExtension}`;

      // Build file paths
      const currentFilePath = await join(noteContext.baseDir, noteContext.fileName);
      const newFilePath = await join(noteContext.baseDir, newFileName);

      // Perform the rename operation
      await rename(currentFilePath, newFilePath);

      // Update note context
      noteContext.setFileName(newFilePath)

    } catch (error) {
      console.error('Failed to rename note:', error);
      // Optional: Could show error to user via prompt system
    }
  }

  return (
    <div className='toolbar' role='toolbar'>
      <ButtonBar onClick={saveNote} aria-label="Save note">
        <Save />
      </ButtonBar>
      <ButtonBar onClick={newNote} aria-label="Create new note">
        <Plus />
      </ButtonBar>
      <ButtonBar onClick={deleteNote} aria-label="Delete note">
        <Trash2 />
      </ButtonBar>
      <ButtonBar onClick={renameNote} aria-label="Rename note">
        <PencilLine />
      </ButtonBar>
      <ButtonBar onClick={showNotesList} aria-label="Show notes list">
        <ListIcon />
      </ButtonBar>
      <ButtonBar onClick={quitApp} aria-label="Quit application">
        <X />
      </ButtonBar>
    </div >
  )
}

export default Bar;
