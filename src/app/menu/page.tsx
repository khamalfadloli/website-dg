"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { menuItems, categories } from "@/lib/menu-data"

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("semua")

  const filteredItems =
    activeCategory === "semua"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory)

  return (
    <>
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto w-full px-margin-mobile md:px-margin-desktop flex flex-col gap-xl mt-[72px] pb-xl">
        <section className="flex flex-col items-center gap-4 text-center pt-8">
          <h1 className="font-headline text-[28px] md:text-[40px] font-extrabold text-primary">
            Our Menu
          </h1>
          <p className="font-body text-base md:text-lg text-on-surface-variant max-w-2xl">
            Discover authentic Indonesian flavors, prepared with love and
            tradition.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`font-body text-sm font-bold px-5 py-2 rounded-full transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-on-primary shadow-md"
                    : "bg-surface-container-low border border-outline/20 text-on-surface-variant hover:border-primary hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {filteredItems.length === 0 && (
          <div className="text-center py-xl">
            <p className="font-body text-base text-on-surface-variant">
              Belum ada menu untuk kategori ini. Nantikan update kami!
            </p>
          </div>
        )}

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(93,64,55,0.08)] overflow-hidden flex flex-col group hover:shadow-[0_8px_30px_rgba(93,64,55,0.12)] transition-shadow duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden bg-surface-variant">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-md flex flex-col flex-grow gap-3">
                <h3 className="font-headline text-xl font-semibold text-on-surface">
                  {item.name}
                </h3>
                <p className="font-body text-sm text-on-surface-variant flex-grow leading-relaxed">
                  {item.description}
                </p>
                <div className="flex justify-between items-center mt-auto pt-3 border-t border-surface-container-highest">
                  <span className="font-headline text-lg font-semibold text-secondary">
                    Rp {item.price.toLocaleString("id-ID")}
                  </span>
                  <a
                    href="https://wa.me/62895602433100"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-primary-fixed-dim hover:text-on-primary-fixed transition-all active:scale-95"
                  >
                    Pesan Via WA
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </>
  )
}
