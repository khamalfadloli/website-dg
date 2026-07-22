import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function TentangPage() {
  return (
    <>
      <Navbar />

      <main className="flex-grow px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto w-full mt-[72px] py-xl">
        <div className="text-center mb-xl">
          <h1 className="font-headline text-[28px] md:text-[36px] font-bold text-on-surface">
            Tentang Dapoer Girli
          </h1>
          <p className="font-body text-base md:text-lg text-on-surface-variant mt-sm">
            Cita Rasa Nusantara Sejak 2019
          </p>
        </div>

        <div className="bg-surface-container-lowest rounded-xl p-lg shadow-[0_4px_20px_rgba(93,64,55,0.08)] space-y-md">
          <section className="space-y-sm">
            <h2 className="font-headline text-2xl font-bold text-on-surface">
              Cerita Kami
            </h2>
            <p className="font-body text-base text-on-surface-variant leading-relaxed">
              Berawal dari kecintaan terhadap kuliner tradisional Indonesia,
              Dapoer Girli hadir untuk menghadirkan pengalaman sarapan otentik
              yang hangat dan menggugah selera. Setiap hidangan kami masak
              dengan resep warisan keluarga yang telah turun-temurun, menggunakan
              bahan-bahan segar dan rempah pilihan.
            </p>
            <p className="font-body text-base text-on-surface-variant leading-relaxed">
              Sejak 2019, kami telah melayani para pecinta sarapan di Jakarta
              Selatan. Dari dapur kecil kami, kami ingin membuktikan bahwa
              sarapan tradisional Indonesia bisa dinikmati dengan cara modern
              dan praktis.
            </p>
          </section>

          <section className="space-y-sm pt-md border-t border-surface-variant">
            <h2 className="font-headline text-2xl font-bold text-on-surface">
              Misi Kami
            </h2>
            <ul className="font-body text-base text-on-surface-variant space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-base mt-1">
                  restaurant
                </span>
                <span>
                  Menyajikan sarapan Nusantara berkualitas dengan rasa autentik
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-base mt-1">
                  delivery_dining
                </span>
                <span>
                  Memberikan kemudahan pemesanan melalui platform digital
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-base mt-1">
                  emoji_events
                </span>
                <span>
                  Melestarikan cita rasa tradisional Indonesia untuk generasi
                  muda
                </span>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
