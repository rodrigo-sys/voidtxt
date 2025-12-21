import { Outlet } from "react-router-dom";
import Bar from "../../components/Bar";
import { NoteProvider } from "../../noteContext";

export default function RootLayout() {

  return (
    <NoteProvider>
      <main >
        <header>
          <Bar />
          <Outlet />
        </header>
      </main >
    </NoteProvider>
  )
}
