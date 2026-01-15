import { appLocalDataDir, join } from "@tauri-apps/api/path";
import { exists, mkdir, readDir, remove, writeTextFile } from "@tauri-apps/plugin-fs";
import { sampleNotes } from "./sampleNotes";

// Function to clear all notes from the notes directory and remove the directory itself
export async function clearNotesDirectory() {
  try {
    const notesDir = await join(await appLocalDataDir(), 'notes');

    if (!(await exists(notesDir))) {
      console.log('Notes directory does not exist, nothing to clear');
      return;
    }

    // Read all entries in the directory
    const entries = await readDir(notesDir);

    // Remove all files
    for (const entry of entries) {
      if (entry.isFile) {
        const entryPath = await join(notesDir, entry.name);
        await remove(entryPath);
        console.log(`Removed: ${entry.name}`);
      }
    }

    // Remove the now-empty directory itself
    await remove(notesDir);
    console.log('Removed notes directory');

    console.log(`Cleared ${entries.filter((e: any) => e.isFile).length} files and removed notes directory`);
  } catch (error) {
    console.error('Error clearing notes directory:', error);
  }
}

// Function to copy sample notes to the notes directory
export async function createSampleNotes() {
  try {
    const notesDir = await join(await appLocalDataDir(), 'notes');

    // Ensure notes directory exists
    if (!(await exists(notesDir))) {
      await mkdir(notesDir);
    }

    // Create sample files directly in notes directory
    for (const sample of sampleNotes) {
      const filePath = await join(notesDir, sample.filename);

      // Only create if file doesn't exist
      if (!(await exists(filePath))) {
        await writeTextFile(filePath, sample.content);
        console.log(`Created sample: ${sample.filename}`);
      } else {
        console.log(`Sample ${sample.filename} already exists, skipping`);
      }
    }

    console.log('Sample notes created in notes directory');
  } catch (error) {
    console.error('Error creating sample notes:', error);
  }
}
