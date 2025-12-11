import { useLanguageContext } from '@/contexts/LanguageContext';

interface OfferCard {
  key: string;
  descKey: string;
  emoji: string;
  color: string;
}

export function Offer() {
  const { t } = useLanguageContext();

  const offers: OfferCard[] = [
    {
      key: 'offer.cocktails',
      descKey: 'offer.cocktailsDesc',
      emoji: '🍹',
      color: 'from-primary/20 to-primary/5',
    },
    {
      key: 'offer.beers',
      descKey: 'offer.beersDesc',
      emoji: '🍺',
      color: 'from-secondary/20 to-secondary/5',
    },
    {
      key: 'offer.tapas',
      descKey: 'offer.tapasDesc',
      emoji: '🍽️',
      color: 'from-accent/20 to-accent/5',
    },
  ];

  return (
    <section
      id="offer"
      className="relative bg-card py-20 md:py-32"
    >
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
            {t('offer.title')}
          </h2>
          <div className="h-1 w-24 bg-secondary mx-auto" />
        </div>

        {/* Offer Cards Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {offers.map((offer) => (
            <div
              key={offer.key}
              className={`group relative rounded-2xl p-8 bg-gradient-to-br ${offer.color} border-2 border-border hover:border-primary/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2`}
            >
              {/* Decorative background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Content */}
              <div className="relative z-10 space-y-4">
                {/* Emoji Icon */}
                <div className="text-6xl">{offer.emoji}</div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
                {t(offer.key)}
              </h3>

              {/* Description */}
              <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
                {t(offer.descKey)}
              </p>

                {/* Decorative line */}
                <div className="pt-4 border-t-2 border-primary/20 group-hover:border-primary/50 transition-colors" />
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-br from-primary/20 to-transparent -z-10" />
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-foreground/60 text-base md:text-lg italic">
            Cada momento en Casa Bamba es una celebración de los sentidos
          </p>
        </div>
      </div>
    </section>
  );
}
