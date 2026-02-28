import { Button } from "@/components/ui/button";
import { Phone, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { t, language, setLanguage } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/jms.png" alt="PT Jayata Medika Sentosa" className="h-10 w-auto rounded-lg" />
          <div className="hidden sm:block">
            <h1 className="font-semibold text-foreground leading-tight">PT Jayata Medika</h1>
            <p className="text-xs text-muted-foreground">Sentosa</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#produk" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            {t('nav.catalog')}
          </a>
          <a href="#layanan" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            {t('nav.features')}
          </a>
          <a href="#tentang" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            {t('nav.about')}
          </a>
          <a href="#kontak" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            {t('foot.contact')}
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          {/* Language Toggle */}
          <div className="flex items-center gap-1 bg-muted/50 rounded-full p-1 border border-border/50">
            <button
              onClick={() => setLanguage('id')}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${language === 'id' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              ID
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${language === 'en' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
