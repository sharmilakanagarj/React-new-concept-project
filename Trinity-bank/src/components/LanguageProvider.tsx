import { useState, type ReactNode } from 'react';
import { type Language, type Theme, LanguageContext } from '../Translation/LanguageContext';

  export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('EN');
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <LanguageContext.Provider value={{ language, setLanguage, theme, toggleTheme }}>
      {children}
    </LanguageContext.Provider>
  );
}


