import { ReactNode } from 'react';
import { PromptProvider } from '../contexts/PromptContext';
import { NoteProvider } from '../noteContext';

type ProvidersProps = {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <NoteProvider>
      <PromptProvider>
        {children}
      </PromptProvider>
    </NoteProvider>
  );
}
