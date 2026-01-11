import { DirEntry, readDir, stat } from "@tauri-apps/plugin-fs"
import { join, appLocalDataDir, extname, basename } from "@tauri-apps/api/path"
import { CSSProperties, useEffect, useState, useRef } from "react"
import { useVirtualizer } from '@tanstack/react-virtual'
import { Link } from "react-router-dom"

export function List() {
  const [notes_entries, setNotesEntries] = useState<Array<DirEntry> | null>(null)
  const parentRef = useRef<HTMLDivElement>(null)

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

  const filteredEntries = notes_entries?.filter(entry => entry.isFile) || []

  const virtualizer = useVirtualizer({
    count: filteredEntries.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
  })

  return (
    <div
      ref={parentRef}
      style={{
        height: '60vh',
        width: '80%',
        margin: '0 auto',
        marginTop: '30px',
        overflow: 'auto',
      }}
    >
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map((virtualItem) => {
          const entry = filteredEntries[virtualItem.index]
          return (
            <div
              key={virtualItem.key}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              <NoteEntry entry={entry} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

async function getBaseName(entry: DirEntry) {
  const extension = await extname(entry.name);
  const baseName = await basename(entry.name, '.' + extension);
  return baseName;
}

function NoteEntry({ entry, style }: { entry: DirEntry, style?: CSSProperties }) {
  const default_style = { fontSize: '30px', color: 'white', textDecoration: 'none' }
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    getBaseName(entry).then(setDisplayName);
  }, [entry])

  return (
    <div>
      <Link
        style={style || default_style}
        to={`/note?filename=${entry.name}`}>{displayName}</Link>
    </div>
  )
}
