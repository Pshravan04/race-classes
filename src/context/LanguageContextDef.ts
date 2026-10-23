import { createContext } from 'react';
import type { Language, TranslationDict } from '../data/translations';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDict;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
