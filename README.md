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

1. Go to the [Releases page](https://github.com/rodrigo-sys/voidtxt/releases).
2. Download the file for your operating system:
   - **Windows:** [`-setup.exe`](https://github.com/rodrigo-sys/voidtxt/releases/download/app-v0.1.0/voidtxt_0.1.0_x64-setup.exe) or [`.msi`](https://github.com/rodrigo-sys/voidtxt/releases/download/app-v0.1.0/voidtxt_0.1.0_x64_en-US.msi)
   - **macOS:** [`.dmg`](https://github.com/rodrigo-sys/voidtxt/releases/download/app-v0.1.0/voidtxt_0.1.0_x64.dmg)
   - **Linux:** [`.deb`](https://github.com/rodrigo-sys/voidtxt/releases/download/app-v0.1.0/voidtxt_0.1.0_amd64.deb), [`.rpm`](https://github.com/rodrigo-sys/voidtxt/releases/download/app-v0.1.0/voidtxt-0.1.0-1.x86_64.rpm), or [`.AppImage`](https://github.com/rodrigo-sys/voidtxt/releases/download/app-v0.1.0/voidtxt_0.1.0_amd64.AppImage)
3. Open the file:
   - Follow the installation steps for installers.
   - For **`.AppImage`**:
     - You can open it directly, or
     - Move it to a directory in your `PATH` (for example, `$HOME/.local/bin`) if you want to run it from the command line.

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
- Add instructions and bundles for mobile
- Create app icon

