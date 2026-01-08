import { appLocalDataDir, extname, basename, join } from "@tauri-apps/api/path";
import { copyFile, readFile, writeFile, writeTextFile } from "@tauri-apps/plugin-fs";
import { useNavigate } from "react-router-dom";
import { NoteContext } from "../noteContext";
import { useContext } from "react";
import { open } from "@tauri-apps/plugin-dialog";
import { convertFileSrc } from "@tauri-apps/api/core";
import { exitApp } from "tauri-plugin-app-exit-api";
import '../styles/Bar.css'
import { platform } from "@tauri-apps/plugin-os";
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

  async function showScratchFile() {
    navigate('/scratch')
  }

  async function uploadBg() {
    const file_path = await open({
      multiple: false,
      directory: false,
    })

    if (!file_path) { return }

    const image_path = await join(await appLocalDataDir(), 'background-image')
    if (platform() == 'android') {
      const content = await readFile(file_path);
      await writeFile(image_path, content);
    } else {
      await copyFile(file_path, image_path);
    }

    const cache_bust = `?t=${Date.now()}`
    const image_url = convertFileSrc(image_path) + cache_bust

    document.documentElement.style.setProperty('--app-image', `url("${image_url}")`)
  }

  function quitApp() {
    exitApp().catch(error => {
      console.log(error)
    })
  }

  async function saveNote({ promptForName = false }: { promptForName?: boolean } = {}): Promise<void> {
    if (!noteContext) return;
    const { content, baseDir, fileName, setFileName } = noteContext;

    const hasFileName = !!fileName;
    const shouldAddExtension = !hasFileName || promptForName;
    const shouldUpdateContext = !hasFileName;

    let note_filename: string;

    if (promptForName) {
      if (hasFileName) {
        const extension = await extname(fileName);
        const basename_without_ext = await basename(fileName, '.' + extension);
        promptContext?.setPromptText(basename_without_ext);
      }
      note_filename = await promptContext?.showPromptAsync() || '';
    } else {
      note_filename = fileName || crypto.randomUUID().slice(0, 8);
    }

    if (shouldAddExtension) {
      note_filename += '.md';
    }

    if (shouldUpdateContext) {
      setFileName(note_filename)
    }

    const note_path = await join(baseDir, note_filename)
    await writeTextFile(note_path, content)
  }

  return (
    <div className='toolbar' role='toolbar'>
      <ButtonBar onClick={showScratchFile}>[scratch]</ButtonBar>
      <ButtonBar
        onClick={saveNote}
        onLongPress={() => saveNote({ promptForName: true })}
      >
        [save]
      </ButtonBar>
      <ButtonBar onClick={newNote}>[new]</ButtonBar>
      <ButtonBar onClick={showNotesList}>[list]</ButtonBar>
      <ButtonBar onClick={uploadBg}>[upload bg]</ButtonBar>
      <ButtonBar onClick={quitApp}>[quit]</ButtonBar>
    </div >
  )
}

export default Bar;
