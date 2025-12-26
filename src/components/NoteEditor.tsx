import { join } from "@tauri-apps/api/path";
import { exists, readTextFile, writeTextFile } from "@tauri-apps/plugin-fs";
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

    try {
      setContent(await readTextFile(note_path))
    } catch (error) {
      if (!(await exists(note_path))) {
        await writeTextFile(note_path, '')
      }
      setContent('')
    }

  }

  useEffect(() => {
    if (props.content) { setContent(props.content); return }
    if (props.content == '') { setContent(''); return }
    if (props.fileName) { setContentFromFile() }
  }, [props.fileName, props.baseDir, props.content])

  return (
    <div>
      <textarea
        placeholder="[new note]"
        value={content}
        onChange={(e) => { setContent(e.target.value) }}
      />
    </div>
  );
}

export default NoteEditor;
