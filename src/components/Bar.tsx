import { appLocalDataDir, join } from "@tauri-apps/api/path";
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
    navigate('/note?content=')
  }

  async function saveNote() {
    if (!noteContext) return;

    const { content } = noteContext;
    const note_name = noteContext.name || crypto.randomUUID().slice(0, 8) + '.md'

    if (!noteContext.name) {
      noteContext.setName(note_name)
    }

    const notes_path = await join(await appLocalDataDir(), 'notes')
    const note_path = await join(notes_path, note_name)

    await writeTextFile(note_path, content)
  }

  return (
    <div style={styles.toolbar} role='toolbar'>
      <button style={styles.button}>[scratch]</button>
      <button style={styles.button} onClick={saveNote}>[save]</button>
      <button style={styles.button} onClick={newNote}>[new]</button>
      <button style={styles.button}>[list]</button>
      <button style={styles.button}>[upload bg]</button>
      <button style={styles.button}>[quit]</button>
    </div>
  )
}

export default Bar;
