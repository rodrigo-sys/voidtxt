import { appLocalDataDir, join } from "@tauri-apps/api/path";
import { copyFile, writeTextFile } from "@tauri-apps/plugin-fs";
import { useNavigate } from "react-router-dom";
import { NoteContext } from "../noteContext";
import { useContext } from "react";
import { open } from "@tauri-apps/plugin-dialog";
import { convertFileSrc } from "@tauri-apps/api/core";
import { exitApp } from "tauri-plugin-app-exit-api";

const styles = {
  button: {
    fontSize: '2.2em', fontWeight: 500
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    gap: 60,
    marginBottom: 10,
    marginTop: 5,
  }
}

function Bar() {
  const navigate = useNavigate()
  const noteContext = useContext(NoteContext);

  function newNote() {
    navigate('/note?filename=&content=')
    noteContext?.setName('')
  }

  async function saveNote() {
    if (!noteContext) return;
    const { content, baseDir, fileName, setFileName } = noteContext;

    const note_filename = fileName || crypto.randomUUID().slice(0, 8) + '.md'

    if (!fileName) {
      setFileName(note_filename)
    }

    const note_path = await join(baseDir, note_filename)

    await writeTextFile(note_path, content)
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
    await copyFile(file_path, image_path);

    const cache_bust = `?t=${Date.now()}`
    const image_url = convertFileSrc(image_path) + cache_bust
    document.documentElement.style.setProperty('--app-image', `url("${image_url}")`)
  }

  function quitApp() {
    exitApp().catch(error => {
      console.log(error)
    })
  }

  return (
    <div style={styles.toolbar} role='toolbar'>
      <button style={styles.button} onClick={showScratchFile}>[scratch]</button>
      <button style={styles.button} onClick={saveNote}>[save]</button>
      <button style={styles.button} onClick={newNote}>[new]</button>
      <button style={styles.button} onClick={showNotesList}>[list]</button>
      <button style={styles.button} onClick={uploadBg}>[upload bg]</button>
      <button style={styles.button} onClick={quitApp}>[quit]</button>
    </div>
  )
}

export default Bar;
