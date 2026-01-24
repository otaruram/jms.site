import { AlertTriangle, Eye, FileQuestion } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProblemSection = () => {
  const { t } = useLanguage();

  const problems = [
    {
      icon: AlertTriangle,
      title: t('problem.item1.title'),
      description: t('problem.item1.desc'),
    },
    {
      icon: Eye,
      title: t('problem.item2.title'),
      description: t('problem.item2.desc'),
    },
    {
      icon: FileQuestion,
      title: t('problem.item3.title'),
      description: t('problem.item3.desc'),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary mb-2">{t('problem.subtitle')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('problem.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('problem.desc')}
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bento-card group hover:scale-[1.03] transition-all duration-300 hover:shadow-xl hover:border-primary/20 bg-white/50 dark:bg-card/50 backdrop-blur-sm"
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
