import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Shield, Award, Leaf } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 hero-gradient overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light border border-primary/20 mb-8 animate-fade-in">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">TKDN 94,37% Tersertifikasi</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Solusi Kebutuhan{" "}
            <span className="gradient-text">Medis & Interior</span>{" "}
            Rumah Sakit Terpercaya
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Modernizing Healthcare Environments with Quality Linen & Professional Blinds. 
            Dipercaya oleh rumah sakit dan klinik di seluruh Indonesia.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#produk">
                Lihat Katalog
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
              <a href="https://wa.me/6281223718485" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5" />
                Hubungi WhatsApp
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm">Standar Medis</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-sm">Bersertifikat</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Leaf className="w-5 h-5 text-primary" />
              <span className="text-sm">Produk Lokal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
