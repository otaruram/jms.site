import React from 'react';

const accessories = [
    {
        title: "Rel Aluminium (High Profile)",
        description: "Sistem rel tempel langit-langit dengan ketahanan beban hingga 10kg/meter persegi.",
        img: "/hospital_rail_aluminum_1772275980594.png", // generated asset
    },
    {
        title: "Roda Carrier Anti Macet",
        description: "Roda bearing polymer PVC yang menjamin pergerakan tirai mulus tanpa suara.",
        img: "/carrier_wheel_pvc_1772276009948.png", // generated asset
    },
    {
        title: "End Cap & Stopper",
        description: "Penutup ujung rel untuk mencegah carrier lepas saat gorden ditarik keras.",
        img: "/end_cap_stopper_1772276037280.png", // generated asset
    },
    {
        title: "Connecting Pipe (Penyambung Rel)",
        description: "Menyambung rel melengkung (kurva U/L) mengitari ranjang pasien tanpa patah.",
        img: "/connecting_pipe_rail_1772276057344.png", // generated asset
    }
];

export default function AccessoriesSection() {
    return (
        <section id="accessories" className="py-20 bg-gray-50/50 dark:bg-black/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div className="max-w-2xl">
                        <span className="text-sm font-bold tracking-wider text-green-600 uppercase mb-3 block">Kelengkapan Instalasi</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                            Komponen Rel & <span className="text-green-600">Aksesoris</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Dukungan perangkat keras presisi tinggi. Rel kami digaransi anti-macet
                            untuk menunjang operasional medis yang dinamis dan berkecepatan tinggi.
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
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                    loading="lazy"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-green-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
