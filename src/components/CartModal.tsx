"use client"

import Image from "next/image"
import type { MenuItem } from "@/lib/menu-data"
import { buildOrderUrl, countItems, formatPrice } from "@/lib/cart"

export default function CartModal({
  open,
  cart,
  items,
  onClose,
  onSetQty,
  onRemove,
}: {
  open: boolean
  cart: Record<string, number>
  items: MenuItem[]
  onClose: () => void
  onSetQty: (itemId: string, qty: number) => void
  onRemove: (itemId: string) => void
}) {
  if (!open) return null

  const rows = items.filter((item) => (cart[item.id] ?? 0) > 0)
  const total = rows.reduce(
    (sum, item) => sum + item.price * cart[item.id],
    0
  )

  const handleOrder = () => {
    window.open(buildOrderUrl(cart, items), "_blank", "noopener,noreferrer")
  }

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div className="absolute inset-x-0 bottom-0 md:inset-x-auto md:right-4 md:bottom-24 md:w-[380px] max-h-[80vh] md:max-h-[60vh] bg-surface-container-lowest rounded-t-2xl md:rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-surface-container-high">
          <h2 className="font-headline text-lg font-bold text-on-surface">
            Keranjang
            {rows.length > 0 && (
              <span className="ml-2 text-sm font-semibold text-on-surface-variant">
                {countItems(cart)} item
              </span>
            )}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup keranjang"
            className="w-9 h-9 rounded-full inline-flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {rows.length === 0 ? (
          <div className="flex flex-col items-center gap-2 px-6 py-10 text-center">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant">
              shopping_cart
            </span>
            <p className="font-body text-sm text-on-surface-variant">
              Keranjang masih kosong. Tambahkan menu favoritmu dulu!
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-2 bg-primary text-white text-sm font-bold px-5 py-2 rounded-full active:scale-95 transition-all"
            >
              Lihat Menu
            </button>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto divide-y divide-surface-container-high">
              {rows.map((item) => (
                <li key={item.id} className="flex items-center gap-3 px-4 py-3">
                  <div className="relative w-12 h-12 shrink-0 rounded-lg overflow-hidden bg-surface-variant">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    ) : (
                      <span className="material-symbols-outlined text-xl text-on-surface-variant absolute inset-0 m-auto flex items-center justify-center">
                        local_cafe
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-sm font-semibold text-on-surface truncate">
                      {item.name}
                    </p>
                    <p className="font-body text-xs text-on-surface-variant">
                      {formatPrice(item.price)} · subtotal{" "}
                      <span className="font-bold text-secondary">
                        {formatPrice(item.price * cart[item.id])}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className="flex items-center rounded-full border border-outline/25 overflow-hidden">
                      <button
                        type="button"
                        onClick={() =>
                          cart[item.id] === 1
                            ? onRemove(item.id)
                            : onSetQty(item.id, cart[item.id] - 1)
                        }
                        aria-label={
                          cart[item.id] === 1
                            ? `Hapus ${item.name}`
                            : `Kurangi ${item.name}`
                        }
                        className="w-8 h-8 inline-flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high active:scale-95 transition-all"
                      >
                        <span className="material-symbols-outlined text-base">
                          {cart[item.id] === 1 ? "delete" : "remove"}
                        </span>
                      </button>
                      <span className="w-8 text-center font-body text-sm font-bold text-on-surface">
                        {cart[item.id]}
                      </span>
                      <button
                        type="button"
                        onClick={() => onSetQty(item.id, cart[item.id] + 1)}
                        aria-label={`Tambah ${item.name}`}
                        className="w-8 h-8 inline-flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high active:scale-95 transition-all"
                      >
                        <span className="material-symbols-outlined text-base">
                          add
                        </span>
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemove(item.id)}
                      aria-label={`Hapus ${item.name} dari keranjang`}
                      className="w-8 h-8 rounded-full inline-flex items-center justify-center text-on-surface-variant hover:bg-error-container hover:text-on-error-container active:scale-95 transition-all"
                    >
                      <span className="material-symbols-outlined text-base">
                        delete
                      </span>
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="px-4 pt-3 pb-[calc(1rem+env(safe-area-inset-bottom))] md:pb-4 border-t border-surface-container-high bg-surface-container-low/50">
              <div className="flex items-center justify-between mb-3">
                <span className="font-body text-sm text-on-surface-variant">
                  Total
                </span>
                <span className="font-headline text-xl font-bold text-secondary">
                  {formatPrice(total)}
                </span>
              </div>
              <button
                type="button"
                onClick={handleOrder}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white font-body text-sm font-bold py-3 rounded-full hover:bg-primary-fixed-dim hover:text-on-primary-fixed active:scale-[0.98] transition-all shadow-md"
              >
                <span className="material-symbols-outlined text-base">
                  send
                </span>
                Pesan Sekarang
              </button>
              <p className="mt-2 text-center font-body text-[11px] text-on-surface-variant">
                Pesanan akan dikirim ke WhatsApp Dapoer Girli
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}