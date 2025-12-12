import { useSearchParams } from "react-router-dom"
import NoteEditor from "../components/NoteEditor"

function NoteEditorPage() {
  const [searchParams] = useSearchParams()
  const path = searchParams.get('path')
  const content = searchParams.get('content')

  return (<NoteEditor path={path} content={content} />)
}

export default NoteEditorPage;
