import React from 'react';
import { Target, Flag, Users } from 'lucide-react';

export default function AboutSection() {
    return (
        <section id="about" className="py-16 md:py-24 bg-white dark:bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Side (Gambar 2 Placeholder) */}
                    <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                        {/* TODO: Ganti src dengan link GitHub jsDelivr nantinya */}
                        <img
                            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop"
                            alt="Pabrik dan Showroom PT Jayata Medika Sentosa"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white">
                            <p className="font-bold text-xl">Profil Perusahaan</p>
                            <p className="text-sm opacity-90">Berdedikasi untuk Fasilitas Kesehatan</p>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="flex flex-col justify-center">
                        <span className="text-sm font-bold tracking-wider text-green-600 uppercase mb-3">Tentang Kami</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 leading-tight">
                            Mitra Pengadaan Gorden Rumah Sakit <span className="text-green-600">Terpercaya</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            PT Jayata Medika Sentosa hadir sebagai solusi terintegrasi untuk kebutuhan linen dan tirai khusus medis.
                            Kami memadukan material tersertifikasi dengan standar keselamatan tertinggi untuk menunjang higienitas
                            ruangan rawat inap Anda.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600">
                                    <Target className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-1">Visi Kami</h3>
                                    <p className="text-muted-foreground leading-relaxed">Menjadi penyedia perlengkapan interior rumah sakit nomor satu di Indonesia yang mengutamakan kualitas keselamatan pasien.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600">
                                    <Flag className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-1">Misi Kami</h3>
                                    <p className="text-muted-foreground leading-relaxed">Menyediakan produk tersertifikasi, pelayanan instalasi tepat waktu, dan harga yang kompetitif bagi mitra B2B kami.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
