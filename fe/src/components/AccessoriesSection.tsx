import React from 'react';

import { useLanguage } from '@/contexts/LanguageContext';

const accessories = [
    {
        titleKey: "acc.1.title",
        descKey: "acc.1.desc",
        img: "/hospital_rail_aluminum_1772275980594.png", // generated asset
    },
    {
        titleKey: "acc.2.title",
        descKey: "acc.2.desc",
        img: "/carrier_wheel_pvc_1772276009948.png", // generated asset
    },
    {
        titleKey: "acc.3.title",
        descKey: "acc.3.desc",
        img: "/end_cap_stopper_1772276037280.png", // generated asset
    },
    {
        titleKey: "acc.4.title",
        descKey: "acc.4.desc",
        img: "/connecting_pipe_rail_1772276057344.png", // generated asset
    }
];

export default function AccessoriesSection() {
    const { t } = useLanguage();
    return (
        <section id="accessories" className="py-20 bg-gray-50/50 dark:bg-black/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div className="max-w-2xl">
                        <span className="text-sm font-bold tracking-wider text-green-600 uppercase mb-3 block">{t('acc.badge')}</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                            {t('acc.title').split(' & ')[0]} & <span className="text-green-600">{t('acc.title').split(' & ')[1]}</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            {t('acc.desc')}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {accessories.map((item, index) => (
                        <div key={index} className="group relative rounded-2xl overflow-hidden bg-white dark:bg-card shadow-sm hover:shadow-xl transition-all duration-300">
                            {/* Image Container */}
                            <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                                {/* TODO: Update src to GitHub jsDelivr URL */}
                                <img
                                    src={item.img}
                                    alt={t(item.titleKey)}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                    loading="lazy"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-green-600 transition-colors">
                                    {t(item.titleKey)}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {t(item.descKey)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
