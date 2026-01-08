import { Outlet } from "react-router-dom";
import Bar from "../../components/Bar";
import { Providers } from "../../components/Providers";
import { useContext } from "react";
import { PromptContext } from "../../contexts/PromptContext";
import Prompt from "../../components/Prompt";

function RootLayoutContent() {
  const promptContext = useContext(PromptContext);

  return (
    <main >
      <header>
        <Bar />
        <Outlet />
      </header>
      {promptContext?.showPrompt && <Prompt />}
    </main >
  );
}

export default function RootLayout() {
  return (
    <Providers>
      <RootLayoutContent />
    </Providers>
  );
}
