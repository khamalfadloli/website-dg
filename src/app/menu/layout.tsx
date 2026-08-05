import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Menu Sarapan Yogyakarta - 27+ Menu Otentik | Dapoer Girli",
  description:
    "Jelajahi menu sarapan Dapoer Girli: Nasi Liwet, Nasi Gudeg, Lontong Opor, Bubur Ayam, Selat Solo, Aneka Es, dan Snack. Harga mulai Rp3.000. Buka 05.00-13.00 WIB di Danurejan, Yogyakarta.",
  openGraph: {
    title: "Menu Sarapan Yogyakarta - 27+ Menu Otentik | Dapoer Girli",
    description:
      "Menu sarapan otentik Nusantara: Nasi Liwet, Gudeg, Lontong Opor, Bubur Ayam, hingga Aneka Es segar. Buka 05.00-13.00 WIB.",
  },
}

export default function MenuLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children
}