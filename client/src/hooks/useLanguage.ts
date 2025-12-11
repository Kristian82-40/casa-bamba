import { useState, useEffect } from 'react';
import { content } from '@/lib/content';

type Language = 'es' | 'en';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('casabamba-language');
      if (saved === 'es' || saved === 'en') {
        return saved;
      }
      const browserLang = navigator.language.split('-')[0];
      return browserLang === 'es' ? 'es' : 'en';
    }
    return 'es';
  });

  useEffect(() => {
    localStorage.setItem('casabamba-language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = content[language as keyof typeof content];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return typeof value === 'string' ? value : key;
  };

  return { language, toggleLanguage, t };
}
