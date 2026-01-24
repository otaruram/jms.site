import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Shield, Award, Leaf } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  const fullText = t('hero.headline');
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/hero-bg.jpg")' }}
      >
        <div className="absolute inset-0 bg-white/70 dark:bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* Decorative gradients */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl z-1 mix-blend-multiply dark:mix-blend-soft-light" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl z-1 mix-blend-multiply dark:mix-blend-soft-light" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-black/50 border border-primary/20 mb-8 animate-fade-in backdrop-blur-sm shadow-sm">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t('hero.badge')}</span>
          </div>

          {/* Headline with typing animation */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 min-h-[1.2em] md:min-h-[2.4em]">
            {displayedText}
            <span className="animate-pulse text-primary">|</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in font-medium" style={{ animationDelay: '0.2s' }}>
            {t('hero.subheadline')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#produk">
                {t('hero.cta.catalog')}
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
              <a href="https://wa.link/2j2jxt" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5" />
                {t('hero.cta.whatsapp')}
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 text-foreground/80 font-medium bg-white/50 dark:bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm">{t('hero.trust.medical')}</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80 font-medium bg-white/50 dark:bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-sm">{t('hero.trust.certified')}</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80 font-medium bg-white/50 dark:bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <Leaf className="w-5 h-5 text-primary" />
              <span className="text-sm">{t('hero.trust.local')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
