import { Shirt, Blinds, Bed, Shield, Sun, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const ProductCard = ({ product, index }: { product: typeof linenProducts[0]; index: number }) => (
  <div
    className="bento-card group relative overflow-hidden"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    {/* Badge */}
    <span className="absolute top-4 right-4 text-xs font-medium px-2.5 py-1 rounded-full bg-primary-light text-primary">
      {product.badge}
    </span>

    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
      <product.icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-lg font-semibold text-foreground mb-2">
      {product.title}
    </h3>
    <p className="text-muted-foreground text-sm leading-relaxed">
      {product.description}
    </p>
  </div>
);

const ProductSection = () => {
  return (
    <section id="produk" className="py-16 md:py-24">
      <div className="container">
        {/* Hospital Linen */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light border border-primary/20 mb-4">
                <Shield className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium text-primary">Kategori A</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Hospital Linen & Apparel
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Produk linen berkualitas tinggi dengan standar medis dan sertifikasi TKDN 94,37%.
              </p>
            </div>
            <Button variant="heroOutline" className="mt-4 md:mt-0" asChild>
              <a href="https://wa.link/yt37r7" target="_blank" rel="noopener noreferrer">
                Minta Katalog Lengkap
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {linenProducts.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))}
          </div>
        </div>

        {/* Window Blinds */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent border border-primary/20 mb-4">
                <Blinds className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium text-primary">Kategori B</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Professional Window Blinds
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Solusi penutup jendela profesional untuk privasi dan kenyamanan optimal.
              </p>
            </div>
            <Button variant="heroOutline" className="mt-4 md:mt-0" asChild>
              <a href="https://wa.link/njqpr9" target="_blank" rel="noopener noreferrer">
                Konsultasi Gratis
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blindProducts.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
