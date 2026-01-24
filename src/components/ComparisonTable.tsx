import { Check } from "lucide-react";

const ComparisonTable = () => {
  return (
    <section id="layanan" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary mb-2">PERBANDINGAN PRODUK</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fitur Unggulan Produk Kami
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bandingkan spesifikasi dan keunggulan dari setiap kategori produk.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-border bg-card shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-secondary/50">
                  <th className="text-left p-4 md:p-6 font-semibold text-foreground">Feature</th>
                  <th className="text-center p-4 md:p-6">
                    <div className="inline-flex flex-col items-center">
                      <span className="font-semibold text-foreground">Hospital Linen</span>
                      <span className="text-xs text-muted-foreground mt-1">Kategori A</span>
                    </div>
                  </th>
                  <th className="text-center p-4 md:p-6">
                    <div className="inline-flex flex-col items-center">
                      <span className="font-semibold text-foreground">Window Blinds</span>
                      <span className="text-xs text-muted-foreground mt-1">Kategori B</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-card-hover transition-colors">
                  <td className="p-4 md:p-6">
                    <span className="font-medium text-foreground">Material</span>
                  </td>
                  <td className="p-4 md:p-6 text-center">
                    <span className="text-sm text-muted-foreground">TC Galaticos / American Drill</span>
                  </td>
                  <td className="p-4 md:p-6 text-center">
                    <span className="text-sm text-muted-foreground">Polyester / PVC / Wood</span>
                  </td>
                </tr>
                <tr className="hover:bg-card-hover transition-colors">
                  <td className="p-4 md:p-6">
                    <span className="font-medium text-foreground">Standard</span>
                  </td>
                  <td className="p-4 md:p-6 text-center">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      <Check className="w-4 h-4" />
                      TKDN 94,37%
                    </span>
                  </td>
                  <td className="p-4 md:p-6 text-center">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      <Check className="w-4 h-4" />
                      Modern & Minimalist
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-card-hover transition-colors">
                  <td className="p-4 md:p-6">
                    <span className="font-medium text-foreground">Special Features</span>
                  </td>
                  <td className="p-4 md:p-6 text-center">
                    <span className="text-sm text-muted-foreground">Anti-Bacterial & Anti-Blood</span>
                  </td>
                  <td className="p-4 md:p-6 text-center">
                    <span className="text-sm text-muted-foreground">Light Blockage up to 100%</span>
                  </td>
                </tr>
                <tr className="hover:bg-card-hover transition-colors">
                  <td className="p-4 md:p-6">
                    <span className="font-medium text-foreground">Target Area</span>
                  </td>
                  <td className="p-4 md:p-6 text-center">
                    <span className="text-sm text-muted-foreground">Ruang Rawat, OK, Poliklinik</span>
                  </td>
                  <td className="p-4 md:p-6 text-center">
                    <span className="text-sm text-muted-foreground">Lobby, Kantor, Ruang Pasien</span>
                  </td>
                </tr>
                <tr className="hover:bg-card-hover transition-colors">
                  <td className="p-4 md:p-6">
                    <span className="font-medium text-foreground">Customization</span>
                  </td>
                  <td className="p-4 md:p-6 text-center">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      <Check className="w-4 h-4" />
                      Logo & Ukuran Custom
                    </span>
                  </td>
                  <td className="p-4 md:p-6 text-center">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      <Check className="w-4 h-4" />
                      Ukuran & Warna Custom
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
