import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
    id: {
        "nav.home": "Beranda",
        "nav.about": "Tentang Kami",
        "nav.features": "Keunggulan",
        "nav.catalog": "Katalog Bahan",
        "nav.accessories": "Aksesoris",
        "nav.portfolio": "Portofolio",

        "hero.badge": "TKDN 94,37% Tersertifikasi",
        "hero.headline": "Solusi Interior & Linen Medis Standar Internasional",
        "hero.subheadline": "Modernizing Healthcare Environments with Quality Linen & Professional Blinds. Dipercaya oleh rumah sakit dan klinik di seluruh Indonesia.",
        "hero.trust.medical": "Standar Medis",
        "hero.trust.certified": "Bersertifikat",
        "hero.trust.local": "Produk Lokal",

        "about.badge": "Pabrik dan Showroom PT Jayata Medika Sentosa",
        "about.title": "Profil Perusahaan",
        "about.subtitle": "Berdedikasi untuk Fasilitas Kesehatan",
        "about.section.title": "Tentang Kami",
        "about.section.subtitle": "Mitra Pengadaan Gorden Rumah Sakit Terpercaya",
        "about.desc": "PT Jayata Medika Sentosa hadir sebagai solusi terintegrasi untuk kebutuhan linen dan tirai khusus medis. Kami memadukan material tersertifikasi dengan standar keselamatan tertinggi untuk menunjang higienitas ruangan rawat inap Anda.",
        "about.vision.title": "Visi Kami",
        "about.vision.desc": "Menjadi penyedia perlengkapan interior rumah sakit nomor satu di Indonesia yang mengutamakan kualitas keselamatan pasien.",
        "about.mission.title": "Misi Kami",
        "about.mission.desc": "Menyediakan produk tersertifikasi, pelayanan instalasi tepat waktu, dan harga yang kompetitif bagi mitra B2B kami.",

        "trusted.title": "Dipercaya oleh puluhan fasilitas kesehatan B2B di Indonesia",

        "features.badge": "Standar Mutu Tertinggi",
        "features.title": "Keunggulan Teknis Gorden JMS",
        "features.desc": "Bukan sekadar penutup ruangan. Kami mendesain kain gorden kami dengan enam lapis keunggulan mutlak untuk standar keselamatan medis B2B.",
        "feat.1.title": "Anti Bakteri Tersertifikasi",
        "feat.1.desc": "Material diuji secara klinis dan tersertifikasi mencegah perkembangbiakan patogen udara.",
        "feat.2.title": "Water Repellent (Tahan Cairan)",
        "feat.2.desc": "Tidak tembus darah dan cairan kimia tajam, sangat mudah dilap dalam kondisi darurat.",
        "feat.3.title": "Fire Retardant (Anti Api)",
        "feat.3.desc": "Tidak mudah terbakar dan akan cepat memadamkan api dengan sendirinya (self-extinguishing).",
        "feat.4.title": "Konstruksi Jaring Khusus",
        "feat.4.desc": "Bagian atas gorden dilengkapi jaring 50cm agar sirkulasi udara dan AC tetap menyebar rata ke pasien.",
        "feat.5.title": "Aman untuk Pasien & Lingkungan",
        "feat.5.desc": "Bebas dari zar kimia beracun dan material non-alergenik, cocok untuk bangsal anak sekalipun.",
        "feat.6.title": "Standar Akreditasi KARS / JCI",
        "feat.6.desc": "Mengikuti pedoman persilangan infeksi untuk membantu kelulusan akreditasi rumah sakit.",

        "mat.badge": "Katalog Lengkap",
        "mat.title": "Spesifikasi & Pilihan Bahan",
        "mat.desc": "Sistem klasifikasi 3-kategori (Jaring, Polyester, dan PVC) kami memungkinkan rumah sakit memilih tirai paling higienis sesuai tingkat risiko bangsal.",
        "mat.tab.jaring": "Jaring Anti Bakteri",
        "mat.tab.polyester": "Polyester Anti Bakteri",
        "mat.tab.pvc": "PVC Non-Blackout",
        "mat.spec.title": "Spesifikasi Teknis",
        "mat.spec.1": "Lebar jaring: 50cm",
        "mat.spec.2": "Material mesh anti-robek",
        "mat.spec.3": "Standard ventilasi sentral",
        "mat.colors.title": "Pilihan Warna",
        "mat.colors.cream": "Cream",
        "mat.colors.blue": "Biru",
        "mat.colors.green": "Hijau",
        "mat.colors.pink": "Pink",
        "mat.cta": "Minta Katalog PDF Lengkap Via WA",

        "acc.badge": "Kelengkapan Instalasi",
        "acc.title": "Komponen Rel & Aksesoris",
        "acc.desc": "Dukungan perangkat keras presisi tinggi. Rel kami digaransi anti-macet untuk menunjang operasional medis yang dinamis dan berkecepatan tinggi.",
        "acc.1.title": "Rel Aluminium (High Profile)",
        "acc.1.desc": "Sistem rel tempel langit-langit dengan ketahanan beban hingga 10kg/meter persegi.",
        "acc.2.title": "Roda Carrier Anti Macet",
        "acc.2.desc": "Roda bearing polymer PVC yang menjamin pergerakan tirai mulus tanpa suara.",
        "acc.3.title": "End Cap & Stopper",
        "acc.3.desc": "Penutup ujung rel untuk mencegah carrier lepas saat gorden ditarik keras.",
        "acc.4.title": "Connecting Pipe (Penyambung Rel)",
        "acc.4.desc": "Menyambung rel melengkung (kurva U/L) mengitari ranjang pasien tanpa patah.",

        "gal.badge": "Bukti Pemasangan",
        "gal.title.1": "Pengalaman",
        "gal.title.2": "Instalasi Nyata",
        "gal.desc": "JMS tidak hanya menyuplai material, tetapi juga memiliki tim teknisi spesialis gorden medis yang memastikan keamanan konstruksi penyangga atap rumah sakit.",
        "gal.cta": "Lihat Portofolio Lengkap",
        "gal.1": "Instalasi Rel Lengkung di Ruang ICU",
        "gal.2": "Pemasangan Gorden Anti-Bakteri Bangsal Anak",
        "gal.3": "Pengepasan Gorden Jaring Ruang VIP",
        "gal.4": "Proses Drilling & Anchoring Rel",

        "foot.desc": "Pusat pengadaan gorden rumah sakit dan komponen rel medis bersertifikat TKDN. Solusi interior klinis terpercaya untuk fasilitas kesehatan di seluruh Indonesia.",
        "foot.nav": "Navigasi",
        "foot.contact": "Hubungi Kami",
        "foot.hours": "Jam Operasional",
        "foot.hours.weekday": "Senin - Jumat:",
        "foot.hours.saturday": "Sabtu:",
        "foot.hours.sunday": "Minggu:",
        "foot.hours.closed": "Tutup",
        "foot.cta": "Minta Penawaran Harga",
        "foot.copyright": "© 2026 PT Jayata Medika Sentosa. Dilindungi Hak Cipta.",

        "chat.toggle": "Buka Layanan Asisten Medis",
        "chat.title": "Jayata Medika Sentosa",
        "chat.status": "Layanan Informasi Otomatis",
        "chat.footer": "Pesan dikelola oleh sistem otomatis JMS",
        "chat.init": "Halo! Selamat datang di layanan informasi otomatis PT Jayata Medika Sentosa. Kami adalah spesialis penyedia Gorden Rumah Sakit berstandar akreditasi. Silakan pilih informasi yang Anda butuhkan di bawah ini:",
        "chat.opt.1": "Tentang Produk & Keunggulan",
        "chat.opt.2": "Katalog Warna",
        "chat.opt.3": "Portofolio Klien (Rumah Sakit)",
        "chat.opt.4": "Informasi Kontak & Lokasi",
        "chat.opt.5": "Chat Langsung dengan Admin (WhatsApp)",
        "chat.resp.1.desc": "Kami menyediakan beberapa varian gorden medis berstandar tinggi yang disesuaikan dengan kebutuhan fasilitas kesehatan Anda:",
        "chat.resp.1.pvc": "Sangat cocok untuk ruang tindakan. Memiliki keunggulan anti-bakteri & kuman, tahan air/cairan (darah, urine), anti-jamur, fire retardant (sulit terbakar), mudah dibersihkan, dan memiliki daya tahan robek yang tinggi. Varian Blackout dilengkapi lapisan silver untuk memblokir cahaya optimal.",
        "chat.resp.1.poly": "Berbahan kain standar medis dengan jaring sirkulasi udara di bagian atas, cocok untuk ruang rawat inap.",
        "chat.resp.1.min": "Gorden estetis untuk Poli Eksekutif, Ruang VIP, Perkantoran, atau Hotel.",
        "chat.resp.1.acc": "Kami juga menyediakan komponen lengkap seperti Rel Flexi HD, Bracket, End Cup, dan Roda.",
        "chat.resp.2.desc": "Kami memiliki banyak pilihan warna untuk menyesuaikan dengan identitas visual Rumah Sakit/Klinik Anda.",
        "chat.resp.2.solid": "Pink, Sky Blue/Water Blue, Tree Green/Leaf Green, Cream, Capucino, Off White, Peach, Maroon, Grey, Brown, dan Black.",
        "chat.resp.2.note": "Catatan: Varian Polyester juga memiliki opsi warna ungu (Purple).",
        "chat.resp.2.cta": "Apakah Anda ingin melihat langsung sampel warna dan bahan? Silakan pilih menu Chat dengan Admin ya.",
        "chat.resp.3.desc": "Kualitas kami telah dipercaya oleh berbagai fasilitas kesehatan terkemuka. Beberapa mitra rumah sakit yang telah menggunakan instalasi gorden PT Jayata Medika Sentosa antara lain:",
        "chat.resp.4.desc": "Anda dapat mengunjungi kantor kami atau menghubungi kami melalui jalur berikut:",
        "chat.resp.4.addr": "Jl. Antapani 4 No.16, Antapani Kidul, Kec. Antapani, Bandung - Jawa Barat 40291",
        "chat.resp.4.hours": "Jam operasional kami adalah Senin - Jumat (08.00 - 17.00 WIB).",
        "tkdn.cert": "TKDN 94,37% Tersertifikasi"
    },
    en: {
        "nav.home": "Home",
        "nav.about": "About Us",
        "nav.features": "Features",
        "nav.catalog": "Material Catalog",
        "nav.accessories": "Accessories",
        "nav.portfolio": "Portfolio",

        "hero.badge": "TKDN 94.37% Certified",
        "hero.headline": "International Standard Medical Interior & Linen Solutions",
        "hero.subheadline": "Modernizing Healthcare Environments with Quality Linen & Professional Blinds. Trusted by hospitals and clinics across Indonesia.",
        "hero.trust.medical": "Medical Standard",
        "hero.trust.certified": "Certified",
        "hero.trust.local": "Local Product",

        "about.badge": "Factory and Showroom of PT Jayata Medika Sentosa",
        "about.title": "Company Profile",
        "about.subtitle": "Dedicated to Healthcare Facilities",
        "about.section.title": "About Us",
        "about.section.subtitle": "Trusted Hospital Curtain Procurement Partner",
        "about.desc": "PT Jayata Medika Sentosa is here as an integrated solution for medical linen and curtain needs. We combine certified materials with the highest safety standards to support the hygiene of your inpatient rooms.",
        "about.vision.title": "Our Vision",
        "about.vision.desc": "To become the number one hospital interior equipment provider in Indonesia prioritizing patient safety quality.",
        "about.mission.title": "Our Mission",
        "about.mission.desc": "Providing certified products, timely installation services, and competitive prices for our B2B partners.",

        "trusted.title": "Trusted by dozens of B2B healthcare facilities in Indonesia",

        "features.badge": "Highest Quality Standards",
        "features.title": "Technical Advantages of JMS Curtains",
        "features.desc": "Not just room covers. We design our curtain fabrics with six layers of absolute advantages for B2B medical safety standards.",
        "feat.1.title": "Certified Anti-Bacterial",
        "feat.1.desc": "Material clinically tested and certified to prevent airborne pathogen growth.",
        "feat.2.title": "Water Repellent",
        "feat.2.desc": "Impervious to blood and sharp chemical liquids, very easy to wipe in emergencies.",
        "feat.3.title": "Fire Retardant",
        "feat.3.desc": "Not easily flammable and will quickly extinguish fire on its own (self-extinguishing).",
        "feat.4.title": "Special Mesh Construction",
        "feat.4.desc": "The top of the curtain features a 50cm mesh so air circulation and AC distribute evenly to patients.",
        "feat.5.title": "Safe for Patients & Environment",
        "feat.5.desc": "Free from toxic chemicals and non-allergenic materials, suitable even for pediatric wards.",
        "feat.6.title": "KARS / JCI Accreditation Standards",
        "feat.6.desc": "Follows cross-infection guidelines to help hospitals pass accreditation.",

        "mat.badge": "Full Catalog",
        "mat.title": "Specifications & Material Options",
        "mat.desc": "Our 3-category classification system (Mesh, Polyester, and PVC) allows hospitals to choose the most hygienic curtains according to ward risk levels.",
        "mat.tab.jaring": "Anti-Bacterial Mesh",
        "mat.tab.polyester": "Anti-Bacterial Polyester",
        "mat.tab.pvc": "PVC Non-Blackout",
        "mat.spec.title": "Technical Specifications",
        "mat.spec.1": "Mesh width: 50cm",
        "mat.spec.2": "Tear-resistant mesh material",
        "mat.spec.3": "Central ventilation standard",
        "mat.colors.title": "Color Options",
        "mat.colors.cream": "Cream",
        "mat.colors.blue": "Blue",
        "mat.colors.green": "Green",
        "mat.colors.pink": "Pink",
        "mat.cta": "Request Full PDF Catalog Via WA",

        "acc.badge": "Installation Equipment",
        "acc.title": "Track & Accessories Components",
        "acc.desc": "High-precision hardware support. Our tracks are guaranteed jam-free to support dynamic and high-speed medical operations.",
        "acc.1.title": "Aluminum Track (High Profile)",
        "acc.1.desc": "Ceiling-mounted track system with load resistance up to 10kg/square meter.",
        "acc.2.title": "Anti-Jam Carrier Wheels",
        "acc.2.desc": "PVC polymer bearing wheels that guarantee smooth, silent curtain movement.",
        "acc.3.title": "End Cap & Stopper",
        "acc.3.desc": "Track end caps to prevent carriers from detaching when curtains are pulled hard.",
        "acc.4.title": "Connecting Pipe",
        "acc.4.desc": "Connects curved tracks (U/L curves) around patient beds without breaking.",

        "gal.badge": "Installation Proof",
        "gal.title.1": "Experience",
        "gal.title.2": "Real Installation",
        "gal.desc": "JMS not only supplies materials but also has a team of medical curtain specialist technicians ensuring the safety of hospital roof support construction.",
        "gal.cta": "View Full Portfolio",
        "gal.1": "Curved Track Installation in ICU Room",
        "gal.2": "Anti-Bacterial Curtain Installation in Pediatric Ward",
        "gal.3": "VIP Room Mesh Curtain Fitting",
        "gal.4": "Track Drilling & Anchoring Process",

        "foot.desc": "Procurement center for hospital curtains and TKDN-certified medical track components. Trusted clinical interior solutions for healthcare facilities across Indonesia.",
        "foot.nav": "Navigation",
        "foot.contact": "Contact Us",
        "foot.hours": "Operational Hours",
        "foot.hours.weekday": "Monday - Friday:",
        "foot.hours.saturday": "Saturday:",
        "foot.hours.sunday": "Sunday:",
        "foot.hours.closed": "Closed",
        "foot.cta": "Request Quote",
        "foot.copyright": "© 2026 PT Jayata Medika Sentosa. All Rights Reserved.",

        "chat.toggle": "Open Medical Assistant Service",
        "chat.title": "Jayata Medika Sentosa",
        "chat.status": "Automated Information Service",
        "chat.footer": "Messages managed by JMS automated system",
        "chat.init": "Hello! Welcome to the automated information service of PT Jayata Medika Sentosa. We are specialists in providing medical-standard hospital curtains. Please select the information you need below:",
        "chat.opt.1": "About Products & Advantages",
        "chat.opt.2": "Color Catalog",
        "chat.opt.3": "Client Portfolio (Hospitals)",
        "chat.opt.4": "Contact Info & Location",
        "chat.opt.5": "Direct Chat with Admin (WhatsApp)",
        "chat.resp.1.desc": "We provide several variants of high-standard medical curtains tailored to the needs of your healthcare facility:",
        "chat.resp.1.pvc": "Perfect for treatment rooms. Features anti-bacterial & germ properties, water/liquid repellant (blood, urine), anti-fungal, fire retardant, easy to clean, and high tear resistance. The Blackout variant includes a silver coating for optimal light blocking.",
        "chat.resp.1.poly": "Made of medical standard fabric with air circulation mesh at the top, suitable for inpatient rooms.",
        "chat.resp.1.min": "Aesthetic curtains for Executive Polyclinics, VIP Rooms, Offices, or Hotels.",
        "chat.resp.1.acc": "We also provide complete components such as HD Flexi Tracks, Brackets, End Caps, and Wheels.",
        "chat.resp.2.desc": "We have many color options to match the visual identity of your Hospital/Clinic.",
        "chat.resp.2.solid": "Pink, Sky Blue/Water Blue, Tree Green/Leaf Green, Cream, Capucino, Off White, Peach, Maroon, Grey, Brown, and Black.",
        "chat.resp.2.note": "Note: Polyester variants also have a purple option.",
        "chat.resp.2.cta": "Would you like to see the color and material samples directly? Please select the Chat with Admin menu.",
        "chat.resp.3.desc": "Our quality has been trusted by various leading healthcare facilities. Some hospital partners who have used the curtain installations of PT Jayata Medika Sentosa include:",
        "chat.resp.4.desc": "You can visit our office or contact us through the following channels:",
        "chat.resp.4.addr": "Jl. Antapani 4 No.16, Antapani Kidul, Antapani District, Bandung - West Java 40291",
        "chat.resp.4.hours": "Our operational hours are Monday - Friday (08.00 - 17.00 WIB).",
        "tkdn.cert": "TKDN 94.37% Certified"
    }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('id');

    const t = (key: string) => {
        return translations[language][key as keyof typeof translations['id']] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
