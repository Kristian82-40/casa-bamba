import { useLanguageContext } from '@/contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';

export function Hero() {
  const { t } = useLanguageContext();
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const heroRect = heroRef.current.getBoundingClientRect();
      const heroHeight = heroRef.current.offsetHeight;

      // Calculate scroll progress (0 to 1)
      const scrolled = Math.max(0, -heroRect.top);
      const progress = Math.min(1, scrolled / heroHeight);

      setScrollProgress(progress);

      // Apply parallax effect to background image
      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="home"
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden bg-background"
    >
      {/* Fixed Background Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/images/casa-bamba-hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Overlay with gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />

      {/* Content - Will be covered by next section */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pt-20">
        <div className="space-y-4 md:space-y-6 max-w-2xl">
          {/* Main Title */}
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary drop-shadow-lg">
              {t('hero.title')}
            </h1>
            <div className="h-1 w-24 bg-secondary mx-auto" />
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground drop-shadow-md font-medium">
            {t('hero.subtitle')}
          </p>

          {/* CTA Button */}
          <div className="pt-6 md:pt-8">
            <a
              href="#about"
              className="inline-block px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground font-bold text-base md:text-lg rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 warm-glow"
            >
              {t('hero.cta')}
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Progress indicator */}
      <div
        className="absolute bottom-0 left-0 h-1 bg-secondary transition-all duration-300"
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </div>
  );
}
