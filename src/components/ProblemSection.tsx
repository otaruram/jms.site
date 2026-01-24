import { AlertTriangle, Eye, FileQuestion } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Kualitas Linen Rendah",
    description: "Bahan yang kasar dan tidak nyaman membuat pasien tidak bisa beristirahat dengan optimal selama perawatan.",
  },
  {
    icon: Eye,
    title: "Privasi Terganggu",
    description: "Jendela tanpa penutup yang tepat di area klinis mengganggu kenyamanan dan privasi pasien.",
  },
  {
    icon: FileQuestion,
    title: "Standar TKDN",
    description: "Sulit menemukan produk dengan nilai TKDN tinggi yang memenuhi standar pengadaan pemerintah.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary mb-2">MASALAH UMUM</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tantangan yang Sering Dihadapi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Banyak fasilitas kesehatan masih menghadapi masalah dalam memenuhi kebutuhan linen dan interior yang berkualitas.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bento-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/15 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
