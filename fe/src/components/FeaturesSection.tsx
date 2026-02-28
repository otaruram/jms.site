import React from 'react';
import { ShieldCheck, Droplets, Flame, Cpu, Leaf, Stethoscope } from 'lucide-react';

const features = [
    {
        icon: ShieldCheck,
        title: 'Anti Bakteri Tersertifikasi',
        description: 'Material diuji secara klinis dan tersertifikasi mencegah perkembangbiakan patogen udara.',
    },
    {
        icon: Droplets,
        title: 'Water Repellent (Tahan Cairan)',
        description: 'Tidak tembus darah dan cairan kimia tajam, sangat mudah dilap dalam kondisi darurat.',
    },
    {
        icon: Flame,
        title: 'Fire Retardant (Anti Api)',
        description: 'Tidak mudah terbakar dan akan cepat memadamkan api dengan sendirinya (self-extinguishing).',
    },
    {
        icon: Cpu,
        title: 'Konstruksi Jaring Khusus',
        description: 'Bagian atas gorden dilengkapi jaring 50cm agar sirkulasi udara dan AC tetap menyebar rata ke pasien.',
    },
    {
        icon: Leaf,
        title: 'Aman untuk Pasien & Lingkungan',
        description: 'Bebas dari zar kimia beracun dan material non-alergenik, cocok untuk bangsal anak sekalipun.',
    },
    {
        icon: Stethoscope,
        title: 'Standar Akreditasi KARS / JCI',
        description: 'Mengikuti pedoman persilangan infeksi untuk membantu kelulusan akreditasi rumah sakit.',
    },
];

export default function FeaturesSection() {
    return (
        <section id="features" className="py-20 bg-green-50/50 dark:bg-green-950/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-sm font-bold tracking-wider text-green-600 uppercase mb-3 block">Standar Mutu Tertinggi</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                        Keunggulan Teknis <span className="text-green-600">Gorden JMS</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Bukan sekadar penutup ruangan. Kami mendesain kain gorden kami dengan enam lapis keunggulan mutlak
                        untuk standar keselamatan medis B2B.
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

                                <h3 className="text-xl font-bold text-foreground mb-3 relative z-10">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed relative z-10">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
