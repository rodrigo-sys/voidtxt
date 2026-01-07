import { createContext, useState, ReactNode } from 'react';

type PromptContextType = {
  showPrompt: boolean;
  promptText: string;
  setShowPrompt: (show: boolean) => void;
  setPromptText: (text: string) => void;
  submitPrompt: () => void;
  clearPrompt: () => void;
  showPromptAsync: (initialValue?: string) => Promise<string>;
}

const PromptContext = createContext<PromptContextType | null>(null);

function PromptProvider({ children }: { children: ReactNode }) {
  const [showPrompt, setShowPrompt] = useState(false);
  const [promptText, setPromptText] = useState('');
  const [promptResolver, setPromptResolver] = useState<((value: string) => void) | null>(null);

  const submitPrompt = () => {
    if (promptResolver) {
      promptResolver(promptText);
      setPromptResolver(null);
    }
    setShowPrompt(false);
    setPromptText('');
  };

  const clearPrompt = () => {
    setPromptText('');
    setShowPrompt(false);
    if (promptResolver) {
      promptResolver('');
      setPromptResolver(null);
    }
  };

  const showPromptAsync = (initialValue?: string): Promise<string> => {
    return new Promise((resolve) => {
      if (initialValue !== undefined) {
        setPromptText(initialValue);
      }
      setPromptResolver(() => resolve);
      setShowPrompt(true);
    });
  };

  return (
    <PromptContext.Provider value={{
      showPrompt,
      promptText,
      setShowPrompt,
      setPromptText,
      submitPrompt,
      clearPrompt,
      showPromptAsync
    }}>
      {children}
    </PromptContext.Provider>
  );
}

export type { PromptContextType };
export { PromptProvider, PromptContext };
