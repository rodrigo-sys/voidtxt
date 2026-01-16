export async function setupDevKeyboardShortcuts(navigate: (path: string) => void) {
  const { platform } = await import("@tauri-apps/plugin-os");

  const current_platform = platform();
  if (current_platform !== 'linux' && current_platform !== 'windows' && current_platform !== 'macos') {
    return;
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'H') {
      navigate('/');
    } else if (event.key === 'N') {
      navigate('/note?filename=&content=');
    } else if (event.key === 'F5' || event.key === ';' || event.key === 'R') {
      event.preventDefault();
      window.location.reload();
    } else if (event.key === 'L') {
      navigate('/notes');
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}
