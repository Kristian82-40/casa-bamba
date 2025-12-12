import { useLanguageContext } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguageContext();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t-2 border-primary/20 py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-1 md:mb-2">CASA DE BAMBA</h3>
            <p className="text-foreground/60 text-xs md:text-sm">
              © {currentYear} Casa de Bamba. Todos los derechos reservados.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-3 md:gap-6 flex-wrap justify-center">
            <a
              href="#home"
              className="text-foreground/60 hover:text-primary transition-colors text-xs md:text-sm font-medium"
            >
              {t('nav.home')}
            </a>
            <a
              href="#about"
              className="text-foreground/60 hover:text-primary transition-colors text-xs md:text-sm font-medium"
            >
              {t('nav.about')}
            </a>
            <a
              href="#offer"
              className="text-foreground/60 hover:text-primary transition-colors text-xs md:text-sm font-medium"
            >
              {t('nav.offer')}
            </a>
            <a
              href="#contact"
              className="text-foreground/60 hover:text-primary transition-colors text-xs md:text-sm font-medium"
            >
              {t('nav.contact')}
            </a>
          </div>

          {/* Tagline */}
          <div className="text-center md:text-right">
            <p className="text-foreground/60 text-xs md:text-sm italic">
              Donde el arte, la música y la buena compañía se encuentran
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
