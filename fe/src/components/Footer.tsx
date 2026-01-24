import { MapPin, Mail, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t, language, setLanguage } = useLanguage();

  return (
    <footer id="kontak" className="bg-foreground text-primary-foreground py-16 md:py-20">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/jms.png" alt="PT Jayata Medika Sentosa" className="h-12 w-auto" />
              <div>
                <h3 className="font-semibold text-primary-foreground leading-tight">PT Jayata Medika</h3>
                <p className="text-sm text-primary-foreground/60">Sentosa</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-md mb-6">
              {t('footer.desc')}
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://wa.me/6281223718485" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4" />
                Hubungi Kami
              </a>
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Produk</h4>
            <ul className="space-y-3">
              <li>
                <a href="#produk" className="text-sm text-primary-foreground/70 hover:text-primary transition-colors">
                  Hospital Linen
                </a>
              </li>
              <li>
                <a href="#produk" className="text-sm text-primary-foreground/70 hover:text-primary transition-colors">
                  Window Blinds
                </a>
              </li>
              <li>
                <a href="#layanan" className="text-sm text-primary-foreground/70 hover:text-primary transition-colors">
                  Perbandingan Produk
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-primary-foreground/70">
                  Jl. Antapani 4 no.16, Antapani Kidul, Kec. Antapani, Bandung - Jawa Barat 40291
                </span>
              </li>
              <li>
                <a href="mailto:jayatamedikasentosa03@gmail.com" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  jayatamedikasentosa03@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+6281223718485" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  0812-2371-8485
                </a>
              </li>
              <li>
                <a href="tel:+62224572408" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  022-4572-0408
                </a>
              </li>
              <li>
                <a href="https://instagram.com/jayatamedikaofficial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-primary transition-colors">
                  <Instagram className="w-4 h-4 text-primary shrink-0" />
                  @jayatamedikaofficial
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/50">
              © 2024 PT Jayata Medika Sentosa. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/50">
              TKDN 94,37% Tersertifikasi
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLanguage('id')}
                className={`text-sm font-medium transition-colors ${language === 'id' ? 'text-primary' : 'text-primary-foreground/50 hover:text-primary-foreground/80'}`}
              >
                ID
              </button>
              <span className="text-primary-foreground/20">|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`text-sm font-medium transition-colors ${language === 'en' ? 'text-primary' : 'text-primary-foreground/50 hover:text-primary-foreground/80'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
