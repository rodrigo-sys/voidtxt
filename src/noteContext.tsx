import { appLocalDataDir, join } from "@tauri-apps/api/path";
import { createContext, useState, ReactNode, useEffect } from "react";

type NoteContextType = {
  fileName: string;
  baseDir: string;
  content: string
  setFileName: (name: string) => void;
  setContent: (content: string) => void;
  setBaseDir: (baseDir: string) => void;
}

const NoteContext = createContext<NoteContextType | null>(null);

function NoteProvider({ children }: { children: ReactNode }) {
  const [fileName, setFileName] = useState('');
  const [baseDir, setBaseDir] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    (async () => {
      setBaseDir(await join(await appLocalDataDir(), 'notes'))
    })()
  }, [])

  return (
    <NoteContext value={{ fileName, baseDir, content, setFileName, setBaseDir, setContent }}>
      {children}
    </NoteContext>
  )
}

export type { NoteContextType }
export { NoteProvider, NoteContext }
