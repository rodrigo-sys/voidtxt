import { createContext, useState, ReactNode } from "react";

type NoteContextType = {
  name: string
  content: string
  setName: (name: string) => void;
  setContent: (content: string) => void;
}

const NoteContext = createContext<NoteContextType | null>(null);

function NoteProvider({ children }: { children: ReactNode }) {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  return (
    <NoteContext value={{ name, content, setName, setContent }}>
      {children}
    </NoteContext>
  )
}

export type { NoteContextType }
export { NoteProvider, NoteContext }
