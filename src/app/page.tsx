import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { menuItems } from "@/lib/menu-data"
import Image from "next/image"
import Link from "next/link"

const merchantLinks = [
  {
    name: "GoFood",
    href: "https://gofood.link/u/13bNG1",
    logo: "/images/gofood.png",
    width: 536,
    height: 173,
    className: "h-9 w-auto",
  },
  {
    name: "GrabFood",
    href: "https://r.grab.com/g/6-20250625_072318_12ff817c2cf34740a8acd6a14b7eb2c3_MEXMPS-6-C2WYJ34XLEX3GJ",
    logo: "/images/grabfood.png",
    width: 950,
    height: 950,
    className: "h-[70px] w-auto",
  },
  {
    name: "ShopeeFood",
    href: "https://shopee.co.id/universal-link/now-food/shop/1123676",
    logo: "/images/shopeefood.png",
    width: 3225,
    height: 1185,
    className: "h-10 w-auto",
  },
]

export default function HomePage() {
  const featuredItems = menuItems.slice(0, 3)

  return (
    <>
      <Navbar />

      <header className="relative w-full min-h-[calc(100vh-72px)] flex items-center justify-center mt-[72px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto gap-[clamp(16px,3vh,32px)] [@media(min-height:600px)]:-mt-4 [@media(min-height:600px)]:mb-4">
          <Image
            alt="Dapoer Girli Logo"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyfdXDOnLMBAEfo1pAlE3yoAeancAarX0X-o8D3Hxc9h3OVfEMqjio9XVllKDx14Qhbn8r2eXsGC6iApCOyA2TIqqBSKVJhbpWbDpSqlHfWeDJk2KPwo8BVr63D0JBlOIPe_ZRd1RQPPAwpU5LrCfeZTzXWnj5k7d6WrwAE8j1Yo-G-cgPX7ZvX6ySkcONLNYVyurYiuoQyNBLnRRL_cl05K9Fb6tO5TxltyB_SJuliN0CsgEn51AzqN1azI7I3SVjYMc"
            width={512}
            height={512}
            priority
            className="w-[clamp(170px,26vh,248px)] h-[clamp(170px,26vh,248px)] object-contain drop-shadow-xl bg-white/10 rounded-full p-4 backdrop-blur-sm"
          />
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs md:text-sm font-bold px-4 py-1.5 rounded-full">
            <span className="material-symbols-outlined text-base">schedule</span>
            Buka Setiap Hari · 05.00 – 13.00 WIB
          </span>
          <h1 className="font-headline text-[clamp(24px,4.5vh,32px)] md:whitespace-nowrap font-extrabold leading-tight tracking-tight text-white drop-shadow-lg">
            <span className="whitespace-nowrap">Sarapan Otentik</span> Nusantara
            untuk Mengawali Harimu.
          </h1>
          <p className="font-body text-base md:text-lg text-surface-container/90 max-w-2xl lg:whitespace-nowrap drop-shadow-md">
            Cita Rasa Nusantara Sejak 2019 · Nikmati kehangatan pagi dengan
            resep warisan nusantara.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-sm">
            <Link
              href="/menu"
              className="bg-primary-container text-on-primary-container font-body text-sm font-bold px-10 py-3 rounded-full shadow-lg hover:-translate-y-1 transition-all"
            >
              Lihat Menu
            </Link>
            <a
              href="https://wa.me/62895602433100"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex bg-white/15 backdrop-blur-sm text-white border border-white/40 font-body text-sm font-bold px-10 py-3 rounded-full shadow-lg hover:-translate-y-1 hover:bg-white/25 transition-all"
            >
              Order via WhatsApp
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-md md:gap-lg text-white pt-2">
            <div className="text-center">
              <p className="font-headline text-[clamp(20px,3.5vh,28px)] font-bold">
                12+
              </p>
              <p className="font-body text-xs md:text-sm text-surface-container/90">
                Menu Otentik
              </p>
            </div>
            <div className="w-px h-10 bg-white/30 hidden md:block" />
            <div className="text-center">
              <p className="font-headline text-[clamp(20px,3.5vh,28px)] font-bold">
                2019
              </p>
              <p className="font-body text-xs md:text-sm text-surface-container/90">
                Melayani Sejak
              </p>
            </div>
            <div className="w-px h-10 bg-white/30 hidden md:block" />
            <div className="text-center">
              <p className="font-headline text-[clamp(20px,3.5vh,28px)] font-bold inline-flex items-center gap-1">
                <span className="material-symbols-outlined text-[clamp(20px,3.5vh,28px)]">
                  star
                </span>
                4.8+
              </p>
              <p className="font-body text-xs md:text-sm text-surface-container/90">
                Grab, Gojek, Shopee
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="py-xl space-y-xl">
        <section
          id="menu"
          className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-xl gap-md">
            <div className="text-center md:text-left">
              <h2 className="font-headline text-[28px] md:text-[32px] font-bold text-on-surface mb-sm">
                Menu Sarapan Pilihan
              </h2>
              <p className="font-body text-base md:text-lg text-on-surface-variant">
                Disiapkan segar setiap pagi untuk menemani hari sibukmu.
              </p>
            </div>
            <Link
              href="/menu"
              className="text-primary font-body text-sm font-bold flex items-center gap-1 hover:underline transition-all"
            >
              Tampilkan Semuanya
              <span className="material-symbols-outlined text-lg">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {featuredItems.map((item) => (
              <article
                key={item.id}
                className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(93,64,55,0.08)] group hover:shadow-[0_8px_30px_rgba(93,64,55,0.12)] transition-shadow duration-300"
              >
                <div className="h-56 md:h-64 overflow-hidden relative bg-surface-variant">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-5xl">
                        local_cafe
                      </span>
                      <span className="font-body text-xs font-bold">
                        Foto menyusul
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-md space-y-3">
                  <h3 className="font-headline text-xl font-semibold text-on-surface">
                    {item.name}
                  </h3>
                  <p className="font-body text-base text-on-surface-variant line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 pt-3 border-t border-surface-variant">
                    <span className="font-body text-base font-bold text-secondary">
                      Rp {item.price.toLocaleString("id-ID")}
                    </span>
                    <a
                      href="https://wa.me/62895602433100"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white text-xs font-bold px-4 py-2 min-h-11 inline-flex items-center justify-center rounded-full hover:bg-primary-fixed-dim hover:text-on-primary-fixed transition-all active:scale-95"
                    >
                      Pesan Via WA
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-surface-container py-xl">
          <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop text-center space-y-lg">
            <h2 className="font-headline text-[28px] md:text-[32px] font-bold text-on-surface">
              Pesan Sekarang Melalui Platform Favoritmu
            </h2>
            <p className="font-body text-base text-on-surface-variant">
              Tersedia untuk pengiriman instan. Nikmati sarapan hangat tanpa
              harus keluar rumah.
            </p>
            <p className="font-body text-base text-on-surface-variant font-bold">
              Tersedia di:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 max-w-2xl mx-auto">
              {merchantLinks.map((merchant) => (
                <a
                  key={merchant.name}
                  href={merchant.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Pesan lewat ${merchant.name}`}
                  className="min-h-20 bg-surface-container-lowest border border-outline/20 px-6 py-4 rounded-xl hover:border-primary hover:shadow-md transition-all shadow-sm inline-flex items-center justify-center"
                >
                  <Image
                    src={merchant.logo}
                    alt={merchant.name}
                    width={merchant.width}
                    height={merchant.height}
                    className={`${merchant.className} object-contain`}
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          id="lokasi"
          className="px-margin-mobile md:px-margin-desktop max-w-5xl mx-auto"
        >
          <div className="bg-surface-container-lowest rounded-xl p-lg shadow-[0_4px_20px_rgba(93,64,55,0.08)] flex flex-col md:flex-row gap-lg items-center">
            <div className="flex-1 space-y-md">
              <h2 className="font-headline text-[28px] md:text-[32px] font-bold text-on-surface">
                Kunjungi Kami
              </h2>
              <div className="space-y-4 text-on-surface-variant font-body text-base">
                <p className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary mt-1">
                    location_on
                  </span>
                  <span>
                    Jl. Tegal Panggung no.30, Danurejan
                    <br />
                    Yogyakarta
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    schedule
                  </span>
                  <span>Buka Setiap Hari: 05.00 - 13.00 WIB</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    call
                  </span>
                  <span>0895-6024-33100</span>
                </p>
              </div>
              <div className="pt-3">
                <a
                  href="https://wa.me/62895602433100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white font-body text-sm font-bold px-6 py-3 rounded-full hover:bg-green-700 transition-colors shadow-sm"
                >
                  <span className="material-symbols-outlined text-base">
                    chat
                  </span>
                  Hubungi WhatsApp
                </a>
              </div>
            </div>
            <div className="flex-1 w-full h-64 md:h-80 bg-surface-variant rounded-lg overflow-hidden border border-outline/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15813.5!2d110.36!3d-7.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5787bd5b6bc5%3A0x6ca3b5e5e5b5c5b5!2sDanurejan%2C%20Yogyakarta!5e0!3m2!1sid!2sid!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Dapoer Girli"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
