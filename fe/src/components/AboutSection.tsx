import React from 'react';
import { Target, Flag, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutSection() {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-16 md:py-24 bg-white dark:bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Side (Gambar 2 Placeholder) */}
                    <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                        {/* TODO: Ganti src dengan link GitHub jsDelivr nantinya */}
                        <img
                            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop"
                            alt={t('about.badge')}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white">
                            <p className="font-bold text-xl">{t('about.title')}</p>
                            <p className="text-sm opacity-90">{t('about.subtitle')}</p>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="flex flex-col justify-center">
                        <span className="text-sm font-bold tracking-wider text-green-600 uppercase mb-3">{t('about.section.title')}</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 leading-tight">
                            {t('about.section.subtitle').split(' Terpercaya')[0]} <span className="text-green-600">{t('about.section.subtitle').split(' ').pop()}</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            {t('about.desc')}
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600">
                                    <Target className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-1">{t('about.vision.title')}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{t('about.vision.desc')}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600">
                                    <Flag className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-1">{t('about.mission.title')}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{t('about.mission.desc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
