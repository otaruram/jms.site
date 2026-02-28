import React, { useState } from 'react';

type Material = {
    name: string;
    specs: string[];
    swatches: { name: string; hex: string }[];
};

const materialsData: Record<string, Material> = {
    jaring: {
        name: "Jaring Anti Bakteri",
        specs: ["Lebar jaring: 50cm", "Material mesh anti-robek", "Standard ventilasi sentral"],
        swatches: [
            { name: "Cream", hex: "#F3E5AB" },
            { name: "Biru", hex: "#4A90E2" },
            { name: "Hijau", hex: "#50C878" },
            { name: "Pink", hex: "#FFC0CB" }
        ]
    },
    polyester: {
        name: "Polyester Anti Bakteri",
        specs: ["100% Polyester", "Gramasi: 240g/m2", "Lebar: 280cm", "Pencucian hingga 90°C"],
        swatches: [
            { name: "Abu", hex: "#808080" },
            { name: "Tosca", hex: "#40E0D0" },
            { name: "Mocca", hex: "#D2B48C" },
            { name: "Kuning", hex: "#FFD700" }
        ]
    },
    pvc: {
        name: "PVC Non-Blackout",
        specs: ["Laminated PVC", "Anti darah & air", "Sangat mudah dibersihkan", "Cocok untuk ICU/UGD"],
        swatches: [
            { name: "Mint", hex: "#98FF98" },
            { name: "Biru Muda", hex: "#ADD8E6" },
            { name: "Abu Gelap", hex: "#A9A9A9" }
        ]
    }
};

import { useLanguage } from '@/contexts/LanguageContext';

export default function MaterialsSection() {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<string>('jaring');

    return (
        <section id="materials" className="py-20 bg-white dark:bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <span className="text-sm font-bold tracking-wider text-green-600 uppercase mb-3 block">{t('mat.badge')}</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                        {t('mat.title')}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {t('mat.desc')}
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {Object.entries(materialsData).map(([key, data]) => (
                        <button
                            key={key}
                            onClick={() => setActiveTab(key)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === key
                                ? 'bg-green-600 text-white shadow-lg shadow-green-500/30'
                                : 'bg-green-50 text-green-700 hover:bg-green-100 dark:bg-green-950/30 dark:text-green-400'
                                }`}
                        >
                            {t(`mat.tab.${key}`)}
                        </button>
                    ))}
                </div>

                {/* Active Content */}
                <div className="max-w-5xl mx-auto bg-green-50/50 dark:bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm animate-fade-in">
                    <div className="grid md:grid-cols-2 gap-12 items-start">

                        {/* Specs Table */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-foreground border-b border-border pb-4">
                                {t('mat.spec.title')}
                            </h3>
                            <ul className="space-y-4">
                                {materialsData[activeTab].specs.map((spec, i) => (
                                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                                        <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                                        <span>{t(spec)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Colors Grid */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-foreground border-b border-border pb-4">
                                {t('mat.colors.title')}
                            </h3>
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                                {materialsData[activeTab].swatches.map((swatch, idx) => (
                                    <div key={idx} className="flex flex-col items-center gap-2 group cursor-pointer">
                                        <div
                                            className="w-14 h-14 rounded-full border-4 border-white dark:border-gray-800 shadow-md transform transition-transform group-hover:scale-110"
                                            style={{ backgroundColor: swatch.hex }}
                                        />
                                        <span className="text-xs font-medium text-center text-muted-foreground">{t(swatch.name)}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Call to action at bottom of catalog */}
                <div className="mt-16 text-center">
                    <a
                        href={`https://wa.me/628132001258?text=${encodeURIComponent("Halo Jayata Medika, boleh saya minta dikirimkan katalog PDF lengkap beserta pricelist untuk semua warna bahan?")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg border-2 border-green-600 bg-transparent px-8 py-3.5 text-base font-semibold text-green-600 transition-all hover:bg-green-50 disabled:opacity-50 disabled:pointer-events-none focus:ring-4 focus:ring-green-100 dark:text-green-400 dark:border-green-500"
                    >
                        {t('mat.cta')}
                    </a>
                </div>

            </div>
        </section>
    );
}
