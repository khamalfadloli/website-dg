import type { Metadata, Viewport } from "next"
import { Be_Vietnam_Pro, Plus_Jakarta_Sans } from "next/font/google"
import MobileActionBar from "@/components/MobileActionBar"
import "./globals.css"

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: "#920000",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://dapoergirli.shop"),
  alternates: {
    canonical: "/",
  },
  title: "Dapoer Girli - Cita Rasa Nusantara Sejak 2019",
  description:
    "Sarapan otentik Nusantara di Jl. Tegal Panggung no.30, Danurejan, Yogyakarta. Buka setiap hari 05.00-13.00 WIB. Pesan antar lewat GoFood, GrabFood, dan ShopeeFood.",
  openGraph: {
    title: "Dapoer Girli - Cita Rasa Nusantara Sejak 2019",
    description:
      "Sarapan otentik Nusantara di Yogyakarta. Buka setiap hari 05.00-13.00 WIB. Reservasi & order online.",
  },
  formatDetection: {
    telephone: true,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Dapoer Girli",
  },
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      className={`${beVietnamPro.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Dapoer Girli",
              image: "https://dapoergirli.shop/images/hero-bg.jpg",
              servesCuisine: ["Indonesia", "Nusantara", "Breakfast"],
              priceRange: "Rp3.000-Rp20.000",
              telephone: "+62895602433100",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jl. Tegal Panggung no.30, Danurejan",
                addressLocality: "Yogyakarta",
                addressCountry: "ID",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "05:00",
                closes: "13:00",
              },
              sameAs: [
                "https://gofood.link/u/13bNG1",
                "https://r.grab.com/g/6-20250625_072318_12ff817c2cf34740a8acd6a14b7eb2c3_MEXMPS-6-C2WYJ34XLEX3GJ",
                "https://shopee.co.id/universal-link/now-food/shop/1123676",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-on-surface font-body antialiased overflow-x-hidden">
        {children}
        <MobileActionBar />
      </body>
    </html>
  )
}
