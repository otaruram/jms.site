import React from 'react';
import { ShieldCheck, Droplets, Flame, Cpu, Leaf, Stethoscope } from 'lucide-react';

import { useLanguage } from '@/contexts/LanguageContext';

const features = [
    {
        icon: ShieldCheck,
        titleKey: 'feat.1.title',
        descKey: 'feat.1.desc',
    },
    {
        icon: Droplets,
        titleKey: 'feat.2.title',
        descKey: 'feat.2.desc',
    },
    {
        icon: Flame,
        titleKey: 'feat.3.title',
        descKey: 'feat.3.desc',
    },
    {
        icon: Cpu,
        titleKey: 'feat.4.title',
        descKey: 'feat.4.desc',
    },
    {
        icon: Leaf,
        titleKey: 'feat.5.title',
        descKey: 'feat.5.desc',
    },
    {
        icon: Stethoscope,
        titleKey: 'feat.6.title',
        descKey: 'feat.6.desc',
    },
];

export default function FeaturesSection() {
    const { t } = useLanguage();
    return (
        <section id="features" className="py-20 bg-green-50/50 dark:bg-green-950/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-sm font-bold tracking-wider text-green-600 uppercase mb-3 block">{t('features.badge')}</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                        {t('features.title').split(' JMS')[0]} <span className="text-green-600">JMS</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {t('features.desc')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="group p-8 rounded-2xl bg-white dark:bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                            >
                                {/* Decorative background element on hover */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-green-100/50 dark:bg-green-900/10 rounded-bl-full translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:-translate-y-0 transition-transform duration-500 ease-out" />

                                <div className="w-14 h-14 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-7 h-7 text-green-600" />
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-3 relative z-10">{t(feature.titleKey)}</h3>
                                <p className="text-muted-foreground leading-relaxed relative z-10">{t(feature.descKey)}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
