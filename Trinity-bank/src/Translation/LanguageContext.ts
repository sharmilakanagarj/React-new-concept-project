import { createContext } from 'react';

export type Language = 'EN' | 'NL';
export type Theme = 'light' | 'dark';

export const LanguageContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
}>({
  language: 'EN',
  setLanguage: () => {},
  theme: 'light',
  toggleTheme: () => {},
});
