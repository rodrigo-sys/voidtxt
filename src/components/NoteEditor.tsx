import { appLocalDataDir, join } from "@tauri-apps/api/path";
import { readTextFile } from "@tauri-apps/plugin-fs";
import { useEffect, useState } from "react";

type NoteEditorProps = { path?: string | null, content?: string | null }
function NoteEditor(props: NoteEditorProps) {
  const [content, setContent] = useState('');

  async function setContentFromFile() {
    const notes_path = await join(await appLocalDataDir(), 'notes');
    setContent(await readTextFile(await join(notes_path, props.path!)))
  }

  useEffect(() => {
    if (props.content) { setContent(props.content); return }
    if (props.path) { setContentFromFile() }
  }, [props.path, props.content])

  return (
    <div>
      <textarea defaultValue={content} />
    </div>
  );
}

export default NoteEditor;
