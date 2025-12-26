import { join } from "@tauri-apps/api/path";
import { writeTextFile } from "@tauri-apps/plugin-fs";
import { useNavigate } from "react-router-dom";
import { NoteContext } from "../noteContext";
import { useContext } from "react";

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

  return (
    <div style={styles.toolbar} role='toolbar'>
      <button style={styles.button} onClick={showScratchFile}>[scratch]</button>
      <button style={styles.button} onClick={saveNote}>[save]</button>
      <button style={styles.button} onClick={newNote}>[new]</button>
      <button style={styles.button} onClick={showNotesList}>[list]</button>
      <button style={styles.button}>[upload bg]</button>
      <button style={styles.button}>[quit]</button>
    </div>
  )
}

export default Bar;
