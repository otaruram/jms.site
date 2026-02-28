import React from 'react';
import { Camera } from 'lucide-react';

const galleryPhotos = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
        caption: "Instalasi Rel Lengkung di Ruang ICU",
        gridClass: "md:col-span-2 md:row-span-2",
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&auto=format&fit=crop",
        caption: "Pemasangan Gorden Anti-Bakteri Bangsal Anak",
        gridClass: "md:col-span-1 md:row-span-1",
    },
    {
        id: 3,
        url: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=800&auto=format&fit=crop",
        caption: "Pengepasan Gorden Jaring Ruang VIP",
        gridClass: "md:col-span-1 md:row-span-1",
    },
    {
        id: 4,
        url: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=800&auto=format&fit=crop",
        caption: "Proses Drilling & Anchoring Rel",
        gridClass: "md:col-span-2 md:row-span-1",
    }
];

export default function InstallationGallery() {
    return (
        <section className="py-24 bg-white dark:bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-sm font-bold tracking-wider text-green-600 uppercase mb-3 block">Bukti Pemasangan</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                            Pengalaman <span className="text-green-600">Instalasi Nyata</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            JMS tidak hanya menyuplai material, tetapi juga memiliki tim teknisi spesialis gorden medis
                            yang memastikan keamanan konstruksi penyangga atap rumah sakit.
                        </p>
                    </div>

                    <a
                        href={`https://wa.me/628132001258?text=${encodeURIComponent("Halo, saya ingin melihat lebih banyak portofolio foto pemasangan di rumah sakit klien JMS.")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center justify-center rounded-lg border-2 border-green-600 bg-transparent px-6 py-3 text-sm font-semibold text-green-600 transition-all hover:bg-green-50 focus:ring-4 focus:ring-green-100 dark:text-green-400 dark:border-green-500"
                    >
                        <Camera className="mr-2 h-4 w-4" />
                        Lihat Portofolio Lengkap
                    </a>
                </div>

                {/* Infinite Marquee Gallery */}
                <div className="relative flex w-full overflow-hidden isolate h-[300px] md:h-[400px]">
                    {/* Left & Right Gradient Fade */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

                    <div className="flex animate-marquee hover:[animation-play-state:paused] w-max h-full">
                        {/* Group 1 */}
                        <div className="flex h-full">
                            {galleryPhotos.map((photo) => (
                                <div key={`g1-${photo.id}`} className="relative h-full w-[300px] md:w-[450px] shrink-0 px-2">
                                    <div className="group relative w-full h-full overflow-hidden rounded-2xl bg-muted">
                                        <img
                                            src={photo.url}
                                            alt={photo.caption}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                            <p className="font-medium text-white text-sm md:text-base line-clamp-2">
                                                {photo.caption}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Group 2 (Duplicate) */}
                        <div className="flex h-full">
                            {galleryPhotos.map((photo) => (
                                <div key={`g2-${photo.id}`} className="relative h-full w-[300px] md:w-[450px] shrink-0 px-2">
                                    <div className="group relative w-full h-full overflow-hidden rounded-2xl bg-muted">
                                        <img
                                            src={photo.url}
                                            alt={photo.caption}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                            <p className="font-medium text-white text-sm md:text-base line-clamp-2">
                                                {photo.caption}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
