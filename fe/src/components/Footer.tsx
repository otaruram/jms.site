import { MapPin, Mail, Phone, Instagram, Building2, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="kontak" className="bg-zinc-950 text-zinc-300 py-16 md:py-24 border-t border-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white leading-none tracking-tight">PT Jayata Medika</span>
                <span className="text-sm text-green-500 font-medium">Sentosa</span>
              </div>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Pusat pengadaan gorden rumah sakit dan komponen rel medis bersertifikat TKDN. Solusi interior klinis terpercaya untuk fasilitas kesehatan di seluruh Indonesia.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://instagram.com/jayatamedikaofficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-6">Navigasi</h4>
            <ul className="space-y-4">
              {['Beranda', 'Tentang Kami', 'Keunggulan', 'Katalog Bahan', 'Aksesoris', 'Portofolio'].map((item) => (
                <li key={item}>
                  <a href="#" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-green-500 transition-colors group">
                    <ChevronRight className="w-4 h-4 text-zinc-700 group-hover:text-green-500 transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-6">
            <h4 className="font-semibold text-white text-lg mb-6">Hubungi Kami</h4>
            <div className="flex items-start gap-4 text-sm text-zinc-400">
              <MapPin className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Jl. Antapani 4 no.16, Antapani Kidul,
                <br />
                Kec. Antapani, Bandung,
                <br />
                Jawa Barat 40291
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm text-zinc-400">
              <Mail className="w-5 h-5 text-green-500 shrink-0" />
              <a href="mailto:jayatamedikasentosa03@gmail.com" className="hover:text-white transition-colors">
                jayatamedikasentosa03@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4 text-sm text-zinc-400">
              <Phone className="w-5 h-5 text-green-500 shrink-0" />
              <div className="flex flex-col gap-1">
                <a href="tel:+628132001258" className="hover:text-white transition-colors">0813-2001-258 (Marketing 1)</a>
                <a href="tel:+62224572408" className="hover:text-white transition-colors">022-4572-0408 (Office)</a>
              </div>
            </div>
          </div>

          {/* Column 4: Operational Hours & CTA */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-6">Jam Operasional</h4>
            <div className="flex items-start gap-4 text-sm text-zinc-400 mb-8">
              <Clock className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <ul className="space-y-2">
                <li className="flex justify-between w-full min-w-[150px]">
                  <span>Senin - Jumat:</span>
                  <span className="text-white">08.00 - 17.00</span>
                </li>
                <li className="flex justify-between w-full min-w-[150px]">
                  <span>Sabtu:</span>
                  <span className="text-white">08.00 - 14.00</span>
                </li>
                <li className="flex justify-between w-full min-w-[150px] text-zinc-500">
                  <span>Minggu:</span>
                  <span>Tutup</span>
                </li>
              </ul>
            </div>

            <a
              href="https://wa.me/628132001258?text=Halo%20JMS%2C%20saya%20ingin%20meminta%20penawaran%20harga%2E"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/20 focus:outline-none focus:ring-4 focus:ring-green-500/30"
            >
              <Phone className="w-4 h-4 mr-2" />
              Minta Penawaran Harga
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-zinc-900/80 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} PT Jayata Medika Sentosa. Dilindungi Hak Cipta.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm font-semibold text-green-500 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
              TKDN 94,37% Tersertifikasi
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
