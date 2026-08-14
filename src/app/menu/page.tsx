"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CartBubble from "@/components/CartBubble"
import CartModal from "@/components/CartModal"
import { menuItems, categories } from "@/lib/menu-data"
import {
  addItem,
  countItems,
  removeItem,
  setQty,
  type Cart,
} from "@/lib/cart"

const CHIP_OFFSET = 140

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("semua")
  const [cart, setCart] = useState<Cart>({})
  const [cartOpen, setCartOpen] = useState(false)
  const sectionRefs = useRef(new Map<string, HTMLElement>())
  const chipRefs = useRef(new Map<string, HTMLButtonElement>())

  const handleAdd = (itemId: string) => setCart((c) => addItem(c, itemId))
  const handleSetQty = (itemId: string, qty: number) =>
    setCart((c) => setQty(c, itemId, qty))
  const handleRemove = (itemId: string) =>
    setCart((c) => removeItem(c, itemId))

  const sections = categories.filter((cat) => cat.id !== "semua")

  useEffect(() => {
    const targets = sections
      .map((cat) => sectionRefs.current.get(cat.id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.target.getBoundingClientRect().top -
              b.target.getBoundingClientRect().top
          )
        if (visible.length > 0) {
          setActiveCategory(visible[0].target.id.replace("section-", ""))
        } else if (window.scrollY < CHIP_OFFSET) {
          setActiveCategory("semua")
        }
      },
      { rootMargin: `-${CHIP_OFFSET}px 0px -55% 0px`, threshold: 0 }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    chipRefs.current
      .get(activeCategory)
      ?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
  }, [activeCategory])

  const handleChipClick = (id: string) => {
    setActiveCategory(id)
    if (id === "semua") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    sectionRefs.current
      .get(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  useEffect(() => {
    const itemId = new URLSearchParams(window.location.search).get("item")
    if (!itemId) return
    const item = menuItems.find((i) => i.id === itemId)
    if (!item) return
    const timer = setTimeout(() => {
      document
        .getElementById(`section-${item.category}`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 150)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto w-full px-margin-mobile md:px-margin-desktop flex flex-col gap-xl mt-[72px] pb-xl">
        <section className="flex flex-col items-center gap-4 text-center pt-8">
          <h1 className="font-headline text-[28px] md:text-[40px] font-extrabold text-primary">
            Our Menu
          </h1>
          <p className="font-body text-base md:text-lg text-on-surface-variant max-w-2xl">
            Temukan menu favoritmu di Dapoer Girli!
          </p>
        </section>

        <div className="sticky top-[72px] z-40 -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0 bg-surface/95 backdrop-blur-md border-b border-outline-variant/20 py-3 -mt-12">
          <div className="flex gap-3 justify-start md:justify-center overflow-x-auto md:flex-wrap md:overflow-visible pb-1 snap-x [&::-webkit-scrollbar]:hidden">
            {categories.map((cat) => (
              <button
                key={cat.id}
                ref={(el) => {
                  if (el) chipRefs.current.set(cat.id, el)
                }}
                onClick={() => handleChipClick(cat.id)}
                className={`shrink-0 font-body text-sm font-bold px-5 py-2 rounded-full transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-on-primary shadow-md"
                    : "bg-surface-container-low border border-outline/20 text-on-surface-variant hover:border-primary hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-xl">
          {sections.map((cat) => {
            const items = menuItems.filter(
              (item) => item.category === cat.id
            )
            if (items.length === 0) return null
            return (
              <section
                key={cat.id}
                id={`section-${cat.id}`}
                ref={(el) => {
                  if (el) sectionRefs.current.set(cat.id, el)
                }}
                className="scroll-mt-[140px] flex flex-col gap-md"
              >
                <div className="flex items-center gap-4 max-w-2xl">
                  <h2 className="font-headline text-[22px] md:text-[28px] font-extrabold text-primary shrink-0">
                    {cat.label}
                  </h2>
                  <div className="h-px flex-1 bg-primary/20" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
                  {items.map((item) => (
                    <article
                      key={item.id}
                      className="bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(93,64,55,0.08)] overflow-hidden flex flex-col group hover:shadow-[0_8px_30px_rgba(93,64,55,0.12)] transition-shadow duration-300"
                    >
                      <div
                        className={`relative w-full overflow-hidden bg-surface-variant ${
                          item.category === "minuman" ||
                          item.category === "aneka-es"
                            ? "h-96"
                            : "h-48"
                        }`}
                      >
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            style={
                              item.category === "minuman" ||
                              item.category === "aneka-es" ||
                              item.id === "risol-mayo"
                                ? {
                                    objectPosition:
                                      item.id === "es-degan" ||
                                      item.id === "es-campur"
                                        ? "center 34%"
                                        : item.id === "risol-mayo"
                                          ? "center 70%"
                                          : "center 20%",
                                  }
                                : undefined
                            }
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
                      <div className="p-md flex flex-col flex-grow gap-3">
                        <h3 className="font-headline text-xl font-semibold text-on-surface">
                          {item.name}
                        </h3>
                        <p className="font-body text-sm text-on-surface-variant flex-grow leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between gap-2 mt-auto pt-3 border-t border-surface-container-highest">
                          <span className="font-headline text-lg font-semibold text-secondary">
                            Rp {item.price.toLocaleString("id-ID")}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleAdd(item.id)}
                            className="inline-flex items-center justify-center gap-1.5 bg-primary text-white text-xs font-bold px-4 py-2 min-h-11 rounded-full hover:bg-primary-fixed-dim hover:text-on-primary-fixed transition-all active:scale-95"
                          >
                            <span className="material-symbols-outlined text-base">
                              add
                            </span>
                            Tambah
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </main>

      <CartBubble count={countItems(cart)} onOpen={() => setCartOpen(true)} />
      <CartModal
        open={cartOpen}
        cart={cart}
        items={menuItems}
        onClose={() => setCartOpen(false)}
        onSetQty={handleSetQty}
        onRemove={handleRemove}
      />

      <Footer />
    </>
  )
}
