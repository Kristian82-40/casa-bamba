import { useLanguageContext } from '@/contexts/LanguageContext';

export function Contact() {
  const { t } = useLanguageContext();

  const socialLinks = [
    { name: 'Instagram', icon: '📱', url: '#' },
    { name: 'Facebook', icon: 'f', url: '#' },
  ];

  return (
    <section
      id="contact"
      className="relative bg-background py-20 md:py-32"
    >
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
            {t('contact.title')}
          </h2>
          <div className="h-1 w-24 bg-secondary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            {/* Phone */}
            <div className="group">
              <h3 className="text-lg md:text-2xl font-bold text-primary mb-2 md:mb-3 flex items-center gap-2">
                <span className="text-2xl md:text-3xl">📞</span>
                {t('contact.phone')}
              </h3>
              <p className="text-foreground/80 text-base md:text-lg ml-10 md:ml-11 group-hover:text-primary transition-colors">
                +1 (555) 123-4567
              </p>
            </div>

            {/* Email */}
            <div className="group">
              <h3 className="text-lg md:text-2xl font-bold text-primary mb-2 md:mb-3 flex items-center gap-2">
                <span className="text-2xl md:text-3xl">✉️</span>
                {t('contact.email')}
              </h3>
              <a
                href="mailto:info@casabamba.com"
                className="text-foreground/80 text-base md:text-lg ml-10 md:ml-11 group-hover:text-primary transition-colors hover:underline"
              >
                info@casabamba.com
              </a>
            </div>

            {/* Location */}
            <div className="group">
              <h3 className="text-lg md:text-2xl font-bold text-primary mb-2 md:mb-3 flex items-center gap-2">
                <span className="text-2xl md:text-3xl">📍</span>
                {t('contact.location')}
              </h3>
              <p className="text-foreground/80 text-base md:text-lg ml-10 md:ml-11">
                Barrio de Artistas<br />
                Ciudad, País
              </p>
            </div>

            {/* Hours */}
            <div className="group">
              <h3 className="text-lg md:text-2xl font-bold text-primary mb-2 md:mb-3 flex items-center gap-2">
                <span className="text-2xl md:text-3xl">🕐</span>
                {t('contact.hours')}
              </h3>
              <p className="text-foreground/80 text-base md:text-lg ml-10 md:ml-11">
                {t('contact.hoursText')}
              </p>
            </div>
          </div>

          {/* Social Links & Message */}
          <div className="space-y-6 md:space-y-8">
            {/* Social Links */}
            <div>
              <h3 className="text-lg md:text-2xl font-bold text-primary mb-4 md:mb-6">
                {t('contact.followUs')}
              </h3>
              <div className="flex gap-3 md:gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-card border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center text-xl md:text-2xl font-bold transform hover:scale-110"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-xl md:rounded-2xl p-6 md:p-8 border-2 border-primary/20">
              <h3 className="text-lg md:text-2xl font-bold text-primary mb-4">
                {t('contact.getInTouch')}
              </h3>
              <form className="space-y-3 md:space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-background border-2 border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-foreground/40 text-sm md:text-base"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Tu email"
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-background border-2 border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-foreground/40 text-sm md:text-base"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tu mensaje"
                    rows={4}
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-background border-2 border-border focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-foreground/40 resize-none text-sm md:text-base"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 md:px-6 py-2 md:py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
