# void.txt

**A note‑taking app built with Tauri.**

https://github.com/user-attachments/assets/dabbe82e-336a-4db7-b3b3-e5d8be5d0725

---

## ✨ Features
- Cross‑platform (Windows, Linux, macOS)
- Clean interface
- Basic note management: create, view, edit, delete, and list notes

---

## 📦 Installation

1. Visit the [Releases page](https://github.com/rodrigo-sys/voidtxt/releases).
2. Download the binary for your operating system.
3. Move the file to a directory included in your system PATH:
   - Windows: `%LOCALAPPDATA%\Microsoft\WindowsApps`
   - Linux/macOS: `$HOME/.local/bin`  
     *(you may need to create this directory and add it to your PATH manually if it doesn’t exist)*

Alternatively, you can simply open the downloaded file directly without moving it, though you’ll need to run it from its folder each time.

---

## 🔨 Build from Source

### 📋 Requirements
Before building, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/) package manager
- [Rust toolchain](https://rustup.rs) (via rustup)
- [System dependencies](https://tauri.app/start/prerequisites/#system-dependencies)

---

### ⚙️ Build Steps
```sh
pnpm install
pnpm tauri build
```

## 📝 TODOs
- User friendly installation  
  setups, installation scripts
- Add instructions and bundles for mobile

