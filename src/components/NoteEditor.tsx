import { join } from "@tauri-apps/api/path";
import { readTextFile } from "@tauri-apps/plugin-fs";
import { useContext, useEffect } from "react";
import { NoteContext, NoteContextType } from "../noteContext";

type NoteEditorProps = {
  fileName?: string | null;
  baseDir?: string | null;
  content?: string | null;
}
function NoteEditor(props: NoteEditorProps) {
  const { content, setContent, baseDir: noteContextBaseDir } = useContext(NoteContext) as NoteContextType;

  async function setContentFromFile() {
    const note_path = await join(props.baseDir || noteContextBaseDir, props.fileName!);
    setContent(await readTextFile(await join(notes_path, props.path!)))
    setContent(await readTextFile(note_path))
  }

  useEffect(() => {
    if (props.content) { setContent(props.content); return }
    if (props.content == '') { setContent(''); return }
    if (props.fileName) { setContentFromFile() }
  }, [props.fileName, props.baseDir, props.content])

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
