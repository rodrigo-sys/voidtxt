import { DirEntry, readDir, stat } from "@tauri-apps/plugin-fs"
import { join, appLocalDataDir } from "@tauri-apps/api/path"
import { CSSProperties, Key, useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function List() {
  const [notes_entries, setNotesEntries] = useState<Array<DirEntry> | null>(null)

  useEffect(() => {
    async function getNotesEntries() {
      const dir = await join(await appLocalDataDir(), 'notes')
      const entries = await readDir(dir)
      const sorted = await sortNotesEntries(entries, dir)
      setNotesEntries(sorted)
    }

    getNotesEntries()
  }, [])

  async function sortNotesEntries(entries: Array<DirEntry>, dir: string) {
    const entries_with_time = await Promise.all(
      entries.map(async (entry) => {
        const entry_path = await join(dir, entry.name)
        const entry_stat = await stat(entry_path)
        return { ...entry, mtime: entry_stat.mtime?.getTime() || 0 }
      })
    )
    return entries_with_time.sort((a, b) => b.mtime - a.mtime)
  }

  return (
    <div>
      {notes_entries !== null &&
        notes_entries.filter(entry => entry.isFile).
          map((entry, i) =>
            <NoteEntry key={i} entry={entry} />
          )
      }
    </div >
  )
}

function NoteEntry({ key, entry, style }: { key: Key, entry: DirEntry, style?: CSSProperties }) {
  const default_style = { fontSize: '30px', color: 'white', textDecoration: 'none' }
  return (
    <div key={key}>
      <Link
        style={style || default_style}
        to={`/note?path=${entry.name}`}>{entry.name}</Link>
    </div>
  )
}
