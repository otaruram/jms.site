import { Shirt, Blinds, Bed, Shield, Sun, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const linenProducts = [
  {
    icon: Shirt,
    title: "Baju Perawat & Bedah",
    description: "Material TC Galaticos dengan opsi Anti-Bakteri, Anti-Air, dan Anti-Darah untuk perlindungan maksimal.",
    badge: "TKDN 94,37%",
  },
  {
    icon: Shirt,
    title: "Jas Dokter Profesional",
    description: "Tampilan profesional dengan bahan American Drill yang nyaman dan tahan lama.",
    badge: "Premium",
  },
  {
    icon: Bed,
    title: "Bedset & Selimut",
    description: "Sprei CVC TC 150/250 dan Selimut Alaci yang lembut untuk kenyamanan pasien.",
    badge: "Best Seller",
  },
];

const blindProducts = [
  {
    icon: Blinds,
    title: "Roller Blinds",
    description: "Desain minimalis sempurna untuk ruang kantor dan rumah sakit modern.",
    badge: "Modern",
  },
  {
    icon: Sun,
    title: "Zebra & Vertical Blinds",
    description: "Fleksibilitas cahaya maksimal dengan kontrol yang mudah dan presisi.",
    badge: "Fleksibel",
  },
  {
    icon: Droplets,
    title: "Bahan Khusus",
    description: "Pilihan Blackout (100% privasi) atau Solar Screen (kurangi panas matahari).",
    badge: "Spesial",
  },
];

const ProductCard = ({ product, index, title, description }: { product: any; index: number; title: string; description: string }) => (
  <div
    className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 
    bg-white dark:bg-card border border-border shadow-sm hover:shadow-xl dark:hover:shadow-glow/20 
    hover:-translate-y-1"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    {/* Badge */}
    <span className="absolute top-4 right-4 text-xs font-bold px-3 py-1.5 rounded-full bg-primary/10 text-primary dark:bg-primary/20">
      {product.badge}
    </span>

    <div className="w-14 h-14 rounded-2xl bg-primary/5 dark:bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/10 dark:group-hover:bg-primary/20 transition-colors">
      <product.icon className="w-7 h-7 text-primary stroke-[1.5]" />
    </div>
    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
      {title}
    </h3>
    <p className="text-muted-foreground text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

const ProductSection = () => {
  const { t } = useLanguage();

  const linenProducts = [
    {
      icon: Shirt,
      badge: t('product.badge.tkdn'),
    },
    {
      icon: Shirt,
      badge: t('product.badge.premium'),
    },
    {
      icon: Bed,
      badge: t('product.badge.bestseller'),
    },
  ];

  const blindProducts = [
    {
      icon: Blinds,
      badge: t('product.badge.modern'),
    },
    {
      icon: Sun,
      badge: t('product.badge.flexible'),
    },
    {
      icon: Droplets,
      badge: t('product.badge.special'),
    },
  ];

  const linenItems = [
    { title: t('products.linen.item1.title'), desc: t('products.linen.item1.desc') },
    { title: t('products.linen.item2.title'), desc: t('products.linen.item2.desc') },
    { title: t('products.linen.item3.title'), desc: t('products.linen.item3.desc') }
  ];

  const blindItems = [
    { title: t('products.blinds.item1.title'), desc: t('products.blinds.item1.desc') },
    { title: t('products.blinds.item2.title'), desc: t('products.blinds.item2.desc') },
    { title: t('products.blinds.item3.title'), desc: t('products.blinds.item3.desc') }
  ];
  return (
    <section id="produk" className="py-16 md:py-24">
      <div className="container">
        {/* Hospital Linen */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Shield className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-bold text-primary">{t('products.category.a')}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {t('products.linen.title')}
              </h2>
              <p className="text-muted-foreground max-w-xl">
                {t('products.linen.desc')}
              </p>
            </div>
            <Button variant="heroOutline" className="mt-4 md:mt-0" asChild>
              <a href="https://wa.link/yt37r7" target="_blank" rel="noopener noreferrer">
                {t('products.cta.catalog')}
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {linenProducts.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                index={index}
                title={linenItems[index].title}
                description={linenItems[index].desc}
              />
            ))}
          </div>
        </div>

        {/* Window Blinds */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Blinds className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-bold text-primary">{t('products.category.b')}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {t('products.blinds.title')}
              </h2>
              <p className="text-muted-foreground max-w-xl">
                {t('products.blinds.desc')}
              </p>
            </div>
            <Button variant="heroOutline" className="mt-4 md:mt-0" asChild>
              <a href="https://wa.link/njqpr9" target="_blank" rel="noopener noreferrer">
                {t('products.cta.consult')}
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blindProducts.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                index={index}
                title={blindItems[index].title}
                description={blindItems[index].desc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
