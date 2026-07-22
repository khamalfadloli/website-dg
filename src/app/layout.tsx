import type { Metadata } from "next"
import { Be_Vietnam_Pro, Plus_Jakarta_Sans } from "next/font/google"
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

export const metadata: Metadata = {
  title: "Dapoer Girli - Cita Rasa Nusantara Sejak 2019",
  description:
    "Nikmati sarapan otentik Nusantara di Dapoer Girli. Resep warisan, cita rasa homemade, siap antar lewat GoFood, GrabFood, dan ShopeeFood.",
  openGraph: {
    title: "Dapoer Girli - Cita Rasa Nusantara Sejak 2019",
    description:
      "Sarapan otentik Nusantara untuk mengawali harimu. Reservasi & order online.",
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
      </head>
      <body className="min-h-screen flex flex-col bg-background text-on-surface font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
