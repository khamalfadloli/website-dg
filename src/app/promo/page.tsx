import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function PromoPage() {
  return (
    <>
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center px-margin-mobile md:px-margin-desktop mt-[72px] py-xl">
        <div className="text-center space-y-md max-w-2xl">
          <span className="material-symbols-outlined text-6xl text-primary">
            local_offer
          </span>
          <h1 className="font-headline text-[28px] md:text-[36px] font-bold text-on-surface">
            Promo Spesial
          </h1>
          <p className="font-body text-base md:text-lg text-on-surface-variant">
            Pantau terus halaman ini untuk promo dan diskon terbaru dari Dapoer
            Girli. Ada kejutan spesial setiap minggunya!
          </p>
        </div>
      </main>

      <Footer />
    </>
  )
}
