import { useState, useEffect, type ReactNode } from 'react';
import { TRANSLATIONS, type Language } from '../data/translations';
import { LanguageContext } from './LanguageContextDef';

const STORAGE_KEY = 'race_reddys_language';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved && (saved === 'en' || saved === 'hi' || saved === 'mr')) {
        return saved;
      }
    } catch {
      // fallback
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = language === 'mr' ? 'mr-IN' : language === 'hi' ? 'hi-IN' : 'en';
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: TRANSLATIONS[language] || TRANSLATIONS.en,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
