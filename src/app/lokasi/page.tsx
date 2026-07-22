import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function LokasiPage() {
  return (
    <>
      <Navbar />

      <main className="flex-grow px-margin-mobile md:px-margin-desktop max-w-5xl mx-auto w-full mt-[72px] py-xl">
        <div className="text-center mb-xl">
          <h1 className="font-headline text-[28px] md:text-[36px] font-bold text-on-surface">
            Kunjungi Kami
          </h1>
          <p className="font-body text-base md:text-lg text-on-surface-variant mt-sm">
            Datang langsung untuk menikmati sarapan favoritmu.
          </p>
        </div>

        <div className="bg-surface-container-lowest rounded-xl p-lg shadow-[0_4px_20px_rgba(93,64,55,0.08)] flex flex-col md:flex-row gap-lg items-center">
          <div className="flex-1 space-y-md">
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
                <span>Buka Setiap Hari: 06.00 - 14.00 WIB</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  call
                </span>
                <span>0895-6024-331000</span>
              </p>
            </div>
            <div className="pt-3">
              <a
                href="https://wa.me/628956024331000"
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
          <div className="flex-1 w-full h-72 md:h-96 bg-surface-variant rounded-lg overflow-hidden border border-outline/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.1238033890294!2d110.362269!3d-7.797944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5787bd5b6bc5%3A0x6ca3b5e5e5b5c5b5!2sJl.%20Tegal%20Panggung%20No.30%2C%20Danurejan%2C%20Yogyakarta!5e0!3m2!1sid!2sid!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Dapoer Girli - Jl. Tegal Panggung no.30, Danurejan, Yogyakarta"
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
