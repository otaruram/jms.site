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
        "nav.products": "Produk",
        "nav.services": "Layanan",
        "nav.about": "Tentang",
        "nav.contact": "Kontak",
        "hero.badge": "TKDN 94,37% Tersertifikasi",
        "hero.headline": "Solusi Interior & Linen Medis Standar Internasional",
        "hero.subheadline": "Modernizing Healthcare Environments with Quality Linen & Professional Blinds. Dipercaya oleh rumah sakit dan klinik di seluruh Indonesia.",
        "hero.cta.catalog": "Lihat Katalog",
        "hero.cta.whatsapp": "Hubungi WhatsApp",
        "hero.trust.medical": "Standar Medis",
        "hero.trust.certified": "Bersertifikat",
        "hero.trust.local": "Produk Lokal",
        "product.badge.tkdn": "TKDN 94,37%",
        "product.badge.premium": "Premium",
        "product.badge.bestseller": "Best Seller",
        "product.badge.modern": "Modern",
        "product.badge.flexible": "Fleksibel",
        "product.badge.special": "Spesial",
        "products.linen.title": "Hospital Linen & Apparel",
        "products.linen.desc": "Produk linen berkualitas tinggi dengan standar medis dan sertifikasi TKDN 94,37%.",
        "products.linen.item1.title": "Baju Perawat & Bedah",
        "products.linen.item1.desc": "Material TC Galaticos dengan opsi Anti-Bakteri, Anti-Air, dan Anti-Darah untuk perlindungan maksimal.",
        "products.linen.item2.title": "Jas Dokter Profesional",
        "products.linen.item2.desc": "Tampilan profesional dengan bahan American Drill yang nyaman dan tahan lama.",
        "products.linen.item3.title": "Bedset & Selimut",
        "products.linen.item3.desc": "Sprei CVC TC 150/250 dan Selimut Alaci yang lembut untuk kenyamanan pasien.",
        "products.blinds.title": "Professional Window Blinds",
        "products.blinds.desc": "Solusi penutup jendela profesional untuk privasi dan kenyamanan optimal.",
        "products.blinds.item1.title": "Roller Blinds",
        "products.blinds.item1.desc": "Desain minimalis sempurna untuk ruang kantor dan rumah sakit modern.",
        "products.blinds.item2.title": "Zebra & Vertical Blinds",
        "products.blinds.item2.desc": "Fleksibilitas cahaya maksimal dengan kontrol yang mudah dan presisi.",
        "products.blinds.item3.title": "Bahan Khusus",
        "products.blinds.item3.desc": "Pilihan Blackout (100% privasi) atau Solar Screen (kurangi panas matahari).",
        "products.cta.catalog": "Minta Katalog Lengkap",
        "products.cta.consult": "Konsultasi Gratis",
        "products.category.a": "Kategori A",
        "products.category.b": "Kategori B",
        "comparison.title": "Fitur Unggulan Produk Kami",
        "comparison.subtitle": "Bandingkan spesifikasi dan keunggulan dari setiap kategori produk.",
        "comparison.header.feature": "Fitur",
        "comparison.row.material": "Material",
        "comparison.row.material.linen": "TC Galaticos / American Drill",
        "comparison.row.material.blinds": "Polyester / PVC / Wood",
        "comparison.row.standard": "Standar",
        "comparison.row.standard.linen": "TKDN 94,37%",
        "comparison.row.standard.blinds": "Modern & Minimalist",
        "comparison.row.features": "Fitur Khusus",
        "comparison.row.features.linen": "Anti-Bakteri & Anti-Darah",
        "comparison.row.features.blinds": "Blokir Cahaya hingga 100%",
        "comparison.row.area": "Area Target",
        "comparison.row.area.linen": "Ruang Rawat, OK, Poliklinik",
        "comparison.row.area.blinds": "Lobby, Kantor, Ruang Pasien",
        "comparison.row.custom": "Kustomisasi",
        "comparison.row.custom.linen": "Logo & Ukuran Custom",
        "comparison.row.custom.blinds": "Ukuran & Warna Custom",
        "problem.title": "Tantangan yang Sering Dihadapi",
        "problem.subtitle": "MASALAH UMUM",
        "problem.desc": "Banyak fasilitas kesehatan masih menghadapi masalah dalam memenuhi kebutuhan linen dan interior yang berkualitas.",
        "problem.item1.title": "Kualitas Linen Rendah",
        "problem.item1.desc": "Bahan yang kasar dan tidak nyaman membuat pasien tidak bisa beristirahat dengan optimal selama perawatan.",
        "problem.item2.title": "Privasi Terganggu",
        "problem.item2.desc": "Jendela tanpa penutup yang tepat di area klinis mengganggu kenyamanan dan privasi pasien.",
        "problem.item3.title": "Standar TKDN",
        "problem.item3.desc": "Sulit menemukan produk dengan nilai TKDN tinggi yang memenuhi standar pengadaan pemerintah.",
        "footer.desc": "Supplier terpercaya untuk kebutuhan linen rumah sakit dan window blinds profesional. Melayani fasilitas kesehatan di seluruh Indonesia.",
        "footer.contact": "Hubungi Kami"
    },
    en: {
        "nav.products": "Products",
        "nav.services": "Services",
        "nav.about": "About",
        "nav.contact": "Contact",
        "hero.badge": "TKDN 94.37% Certified",
        "hero.headline": "International Standard Medical Interior & Linen Solutions",
        "hero.subheadline": "Modernizing Healthcare Environments with Quality Linen & Professional Blinds. Trusted by hospitals and clinics across Indonesia.",
        "hero.cta.catalog": "View Catalog",
        "hero.cta.whatsapp": "Contact WhatsApp",
        "hero.trust.medical": "Medical Standard",
        "hero.trust.certified": "Certified",
        "hero.trust.local": "Local Product",
        "product.badge.tkdn": "TKDN 94.37%",
        "product.badge.premium": "Premium",
        "product.badge.bestseller": "Best Seller",
        "product.badge.modern": "Modern",
        "product.badge.flexible": "Flexible",
        "product.badge.special": "Special",
        "products.linen.title": "Hospital Linen & Apparel",
        "products.linen.desc": "High-quality linen products with medical standards and TKDN 94.37% certification.",
        "products.linen.item1.title": "Nurse & Surgical Scrubs",
        "products.linen.item1.desc": "TC Galaticos material with Anti-Bacterial, Anti-Water, and Anti-Blood options for maximum protection.",
        "products.linen.item2.title": "Professional Doctor Coat",
        "products.linen.item2.desc": "Professional look with comfortable and durable American Drill material.",
        "products.linen.item3.title": "Bedset & Blanket",
        "products.linen.item3.desc": "Soft CVC TC 150/250 Sheets and Alaci Blankets for patient comfort.",
        "products.blinds.title": "Professional Window Blinds",
        "products.blinds.desc": "Professional window covering solutions for optimal privacy and comfort.",
        "products.blinds.item1.title": "Roller Blinds",
        "products.blinds.item1.desc": "Perfect minimalist design for office and modern hospital spaces.",
        "products.blinds.item2.title": "Zebra & Vertical Blinds",
        "products.blinds.item2.desc": "Maximum light flexibility with easy and precise control.",
        "products.blinds.item3.title": "Special Material",
        "products.blinds.item3.desc": "Blackout (100% privacy) or Solar Screen (reduce sun heat) options.",
        "products.cta.catalog": "Request Full Catalog",
        "products.cta.consult": "Free Consultation",
        "products.category.a": "Category A",
        "products.category.b": "Category B",
        "comparison.title": "Our Product Features",
        "comparison.subtitle": "Compare specifications and advantages of each product category.",
        "comparison.header.feature": "Feature",
        "comparison.row.material": "Material",
        "comparison.row.material.linen": "TC Galaticos / American Drill",
        "comparison.row.material.blinds": "Polyester / PVC / Wood",
        "comparison.row.standard": "Standard",
        "comparison.row.standard.linen": "TKDN 94.37%",
        "comparison.row.standard.blinds": "Modern & Minimalist",
        "comparison.row.features": "Special Features",
        "comparison.row.features.linen": "Anti-Bacterial & Anti-Blood",
        "comparison.row.features.blinds": "Light Blockage up to 100%",
        "comparison.row.area": "Target Area",
        "comparison.row.area.linen": "Wards, OT, Polyclinic",
        "comparison.row.area.blinds": "Lobby, Office, Patient Rooms",
        "comparison.row.custom": "Customization",
        "comparison.row.custom.linen": "Custom Logo & Size",
        "comparison.row.custom.blinds": "Custom Size & Color",
        "problem.title": "Common Challenges",
        "problem.subtitle": "COMMON PROBLEMS",
        "problem.desc": "Many healthcare facilities still face issues in meeting quality linen and interior needs.",
        "problem.item1.title": "Low Linen Quality",
        "problem.item1.desc": "Rough and uncomfortable material prevents patients from resting optimally during treatment.",
        "problem.item2.title": "Compromised Privacy",
        "problem.item2.desc": "Windows without proper coverings in clinical areas disturb patient comfort and privacy.",
        "problem.item3.title": "TKDN Standards",
        "problem.item3.desc": "Difficult to find products with high TKDN values that meet government procurement standards.",
        "footer.desc": "Trusted supplier for hospital linen needs and professional window blinds. Serving healthcare facilities across Indonesia.",
        "footer.contact": "Contact Us"
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
