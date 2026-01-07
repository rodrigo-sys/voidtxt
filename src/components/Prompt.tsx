import { useContext, useEffect } from "react";
import { PromptContext } from "../contexts/PromptContext";
import "../styles/Prompt.css";

function Prompt() {
  const promptContext = useContext(PromptContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    promptContext?.submitPrompt();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        promptContext?.setShowPrompt(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [promptContext]);

  return (
    <div className="prompt-backdrop"
      onClick={() => promptContext?.setShowPrompt(false)}>
      <form onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
      >
        <input
          className="prompt-input"
          name='prompt'
          value={promptContext?.promptText || ''}
          onChange={(e) => promptContext?.setPromptText(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  );
}

export default Prompt;
