import { Outlet } from "react-router-dom";
import Bar from "../../components/Bar";

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
