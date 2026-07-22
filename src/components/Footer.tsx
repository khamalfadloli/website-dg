import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest w-full py-xl px-margin-mobile md:px-margin-desktop mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-lg max-w-7xl mx-auto">
        <div className="md:col-span-1 space-y-sm">
          <span className="font-headline text-[22px] font-bold text-primary block mb-sm">
            Dapoer Girli
          </span>
          <p className="font-body text-sm text-on-surface opacity-80 leading-relaxed">
            Menyajikan hidangan sarapan otentik dengan resep warisan nusantara.
          </p>
        </div>

        <div>
          <h4 className="font-body text-sm font-bold text-on-surface mb-sm">
            Menu & Layanan
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/menu"
                className="font-body text-sm text-on-surface-variant hover:text-primary transition-all opacity-80 hover:opacity-100"
              >
                Menu Sarapan
              </Link>
            </li>
            <li>
              <Link
                href="/tentang"
                className="font-body text-sm text-on-surface-variant hover:text-primary transition-all opacity-80 hover:opacity-100"
              >
                Tentang Kami
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-body text-sm font-bold text-on-surface mb-sm">
            Pemesanan
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="font-body text-sm text-on-surface-variant hover:text-primary transition-all opacity-80 hover:opacity-100"
              >
                GoFood
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-body text-sm text-on-surface-variant hover:text-primary transition-all opacity-80 hover:opacity-100"
              >
                GrabFood
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-body text-sm text-on-surface-variant hover:text-primary transition-all opacity-80 hover:opacity-100"
              >
                ShopeeFood
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-body text-sm font-bold text-on-surface mb-sm">
            Informasi
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/lokasi"
                className="font-body text-sm text-on-surface-variant hover:text-primary transition-all opacity-80 hover:opacity-100"
              >
                Lokasi Kami
              </Link>
            </li>
            <li>
              <a
                href="https://wa.me/628956024331000"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-on-surface-variant hover:text-primary transition-all opacity-80 hover:opacity-100"
              >
                Hubungi WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-xl pt-md border-t border-outline-variant/30 text-center">
        <p className="font-body text-xs text-on-surface-variant opacity-80">
          &copy; 2024 Dapoer Girli. Cita Rasa Nusantara Sejak 2019.
        </p>
      </div>
    </footer>
  )
}
