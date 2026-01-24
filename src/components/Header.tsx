import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">JM</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-semibold text-foreground leading-tight">PT Jayata Medika</h1>
            <p className="text-xs text-muted-foreground">Sentosa</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#produk" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Produk
          </a>
          <a href="#layanan" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Layanan
          </a>
          <a href="#tentang" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Tentang
          </a>
          <a href="#kontak" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Kontak
          </a>
        </nav>

        {/* CTA */}
        <Button variant="hero" size="sm" asChild>
          <a href="https://wa.link/2j2jxt" target="_blank" rel="noopener noreferrer">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Hubungi Kami</span>
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
