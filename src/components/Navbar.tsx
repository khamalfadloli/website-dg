"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/menu", label: "Menu" },
  { href: "/promo", label: "Promo" },
  { href: "/lokasi", label: "Lokasi" },
  { href: "/tentang", label: "Tentang Kami" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/20 shadow-sm">
      <div className="max-w-full mx-auto flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 transition-all duration-300">
        <Link
          href="/"
          className="font-headline text-[22px] md:text-[26px] font-bold tracking-tight"
          style={{ color: "#920000" }}
        >
          Dapoer Girli
        </Link>

        <div className="hidden md:flex items-center gap-lg">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-sm font-bold transition-colors duration-200 ${
                  isActive
                    ? "border-b-2 pb-1"
                    : "hover:opacity-80"
                }`}
                style={{ color: "#920000", borderColor: "#920000" }}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-sm">
          <a
            href="https://wa.me/628956024331000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-container text-on-primary-container text-sm font-bold px-5 py-2 rounded-full hover:bg-primary-fixed transition-all active:scale-95 shadow-sm hidden md:block"
          >
            Order Now
          </a>

          <button
            className="md:hidden p-1"
            style={{ color: "#920000" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-outline-variant/20 px-margin-mobile pb-5 pt-3 space-y-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block font-body text-sm font-bold py-2"
                style={{ color: "#920000" }}
              >
                {link.label}
              </Link>
            )
          })}
          <a
            href="https://wa.me/628956024331000"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-primary-container text-on-primary-container text-center text-sm font-bold px-5 py-3 rounded-full mt-2"
          >
            Order Now
          </a>
        </div>
      )}
    </nav>
  )
}
