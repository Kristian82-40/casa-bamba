import { useLanguageContext } from '@/contexts/LanguageContext';
import { useState } from 'react';

export function Navigation() {
  const { language, toggleLanguage, t } = useLanguageContext();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.offer', href: '#offer' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-primary">CASA BAMBA</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {t(item.key)}
            </a>
          ))}
        </div>

        {/* Language Toggle & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-2 md:px-3 py-2 rounded-lg bg-card hover:bg-primary/20 transition-colors text-sm md:text-base"
            aria-label="Toggle language"
          >
            <span className="text-base md:text-lg">
              {language === 'es' ? '🇪🇸' : '🇺🇸'}
            </span>
            <span className="hidden md:inline font-medium">{language.toUpperCase()}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-card rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {t(item.key)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
