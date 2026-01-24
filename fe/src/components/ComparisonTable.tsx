import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ComparisonTable = () => {
  const { t } = useLanguage();
  return (
    <section id="layanan" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary mb-2">PERBANDINGAN PRODUK</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('comparison.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('comparison.subtitle')}
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl bg-card shadow-sm border border-border/50">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-secondary/30">
                  <th className="text-left p-4 md:p-6 font-semibold text-foreground">{t('comparison.header.feature')}</th>
                  <th className="text-center p-4 md:p-6">
                    <div className="inline-flex flex-col items-center">
                      <span className="font-semibold text-foreground">{t('products.linen.title').split(' ')[0]} {t('products.linen.title').split(' ')[1]}</span>
                      <span className="text-xs text-muted-foreground mt-1">{t('products.category.a')}</span>
                    </div>
                  </th>
                  <th className="text-center p-4 md:p-6">
                    <div className="inline-flex flex-col items-center">
                      <span className="font-semibold text-foreground">{t('products.blinds.title').split(' ')[0]} {t('products.blinds.title').split(' ')[1]}</span>
                      <span className="text-xs text-muted-foreground mt-1">{t('products.category.b')}</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr className="group hover:bg-secondary/20 transition-colors odd:bg-primary/5">
                  <td className="p-4 md:p-6">
                    <span className="font-medium text-foreground">{t('comparison.row.material')}</span>
                  </td>
                  <td className="p-4 md:p-6 text-center">
                    <span className="text-sm text-muted-foreground">{t('comparison.row.material.linen')}</span>
                  </td>
                  <td className="p-4 md:p-6 text-center">
                    <span className="text-sm text-muted-foreground">{t('comparison.row.material.blinds')}</span>
                  </td>
                </tr>
                <tr className="group hover:bg-secondary/20 transition-colors odd:bg-primary/5">
                  <td className="p-4 md:p-6">
                    <span className="font-medium text-foreground">{t('comparison.row.standard')}</span>
                  </td>
                  <td className="p-4 md:p-6 text-center">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      <Check className="w-4 h-4" />
                      {t('comparison.row.standard.linen')}
                    </span>
                  </td>
                  <td className="p-4 md:p-6 text-center">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      <Check className="w-4 h-4" />
                      {t('comparison.row.standard.blinds')}
                    </span>
                  </td>
                </tr>
                <tr className="group hover:bg-secondary/20 transition-colors odd:bg-primary/5">
                  <td className="p-4 md:p-6">
                    <span className="font-medium text-foreground">{t('comparison.row.features')}</span>
                  </td>
                  <td className="p-4 md:p-6 text-center">
                    <span className="text-sm text-muted-foreground">{t('comparison.row.features.linen')}</span>
                  </td>
                  <td className="p-4 md:p-6 text-center">
                    <span className="text-sm text-muted-foreground">{t('comparison.row.features.blinds')}</span>
                  </td>
                </tr>
                <tr className="group hover:bg-secondary/20 transition-colors odd:bg-primary/5">
                  <td className="p-4 md:p-6">
                    <span className="font-medium text-foreground">{t('comparison.row.area')}</span>
                  </td>
                  <td className="p-4 md:p-6 text-center">
                    <span className="text-sm text-muted-foreground">{t('comparison.row.area.linen')}</span>
                  </td>
                  <td className="p-4 md:p-6 text-center">
                    <span className="text-sm text-muted-foreground">{t('comparison.row.area.blinds')}</span>
                  </td>
                </tr>
                <tr className="group hover:bg-secondary/20 transition-colors odd:bg-primary/5">
                  <td className="p-4 md:p-6">
                    <span className="font-medium text-foreground">{t('comparison.row.custom')}</span>
                  </td>
                  <td className="p-4 md:p-6 text-center">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      <Check className="w-4 h-4" />
                      {t('comparison.row.custom.linen')}
                    </span>
                  </td>
                  <td className="p-4 md:p-6 text-center">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      <Check className="w-4 h-4" />
                      {t('comparison.row.custom.blinds')}
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
