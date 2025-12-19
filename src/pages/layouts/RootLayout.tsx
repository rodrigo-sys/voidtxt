import { Outlet } from "react-router-dom";
import Bar from "../../components/bar";

export default function RootLayout() {

  return (
    <main >
      <header>
        <Bar />
        <Outlet />
      </header>
    </main >
  )
}
