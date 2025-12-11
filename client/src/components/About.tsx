import { useLanguageContext } from '@/contexts/LanguageContext';

export function About() {
  const { t } = useLanguageContext();

  return (
    <section
      id="about"
      className="relative z-20 bg-background py-20 md:py-32"
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
              {t('about.title')}
            </h2>

            <div className="bohemian-divider" />

            <div className="space-y-3 md:space-y-4 text-foreground/90">
              <p className="text-base md:text-lg leading-relaxed">
                {t('about.description')}
              </p>

              <p className="text-base md:text-lg leading-relaxed italic text-secondary">
                {t('about.challenge')}
              </p>

              <p className="text-base md:text-lg leading-relaxed font-medium text-accent">
                {t('about.impact')}
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                {t('about.values')}
              </p>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative order-first md:order-last">
            <div className="aspect-square rounded-xl md:rounded-2xl overflow-hidden bg-card border-2 md:border-4 border-primary/20 shadow-2xl">
              {/* Placeholder for About section image */}
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="text-6xl">🎨</div>
                  <p className="text-foreground/60 text-base md:text-lg font-medium">
                    Comunidad de Artistas
                  </p>
                  <p className="text-foreground/40 text-xs md:text-sm">
                    Un espacio hecho con pasión
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
