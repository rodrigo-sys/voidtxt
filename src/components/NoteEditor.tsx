import { appLocalDataDir, join } from "@tauri-apps/api/path";
import { readTextFile } from "@tauri-apps/plugin-fs";
import { useContext, useEffect } from "react";
import { NoteContext, NoteContextType } from "../noteContext";

type NoteEditorProps = { path?: string | null, content?: string | null }
function NoteEditor(props: NoteEditorProps) {
  const { content, setContent } = useContext(NoteContext) as NoteContextType;

  async function setContentFromFile() {
    const notes_path = await join(await appLocalDataDir(), 'notes');
    setContent(await readTextFile(await join(notes_path, props.path!)))
  }

  useEffect(() => {
    if (props.content) { setContent(props.content); return }
    if (props.content == '') { setContent(''); return }
    if (props.path) { setContentFromFile() }
  }, [props.path, props.content])

  return (
    <div>
      <textarea
        value={content}
        onChange={(e) => { setContent(e.target.value) }}
      />
    </div>
  );
}

export default NoteEditor;
