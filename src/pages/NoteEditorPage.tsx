import { useSearchParams } from "react-router-dom"
import NoteEditor from "../components/NoteEditor"
import { useContext, useEffect } from "react"
import { NoteContext } from "../noteContext"

function NoteEditorPage() {
  const [searchParams] = useSearchParams()
  const fileName = searchParams.get('filename')
  const baseDir = searchParams.get('basedir')
  const content = searchParams.get('content')
  const noteContext = useContext(NoteContext)

  return (<NoteEditor path={path} content={content} />)
  return (<NoteEditor fileName={fileName} baseDir={baseDir} content={content} />)
}

export default NoteEditorPage;
