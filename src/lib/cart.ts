export const WA_PHONE = "62895602433100"
export const MAX_QTY = 99

export type Cart = Record<string, number>

export function addItem(cart: Cart, itemId: string): Cart {
  const current = cart[itemId] ?? 0
  return { ...cart, [itemId]: Math.min(MAX_QTY, current + 1) }
}

export function setQty(cart: Cart, itemId: string, qty: number): Cart {
  if (qty <= 0) return removeItem(cart, itemId)
  return { ...cart, [itemId]: Math.min(MAX_QTY, qty) }
}

export function removeItem(cart: Cart, itemId: string): Cart {
  const next = { ...cart }
  delete next[itemId]
  return next
}

export function countItems(cart: Cart): number {
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0)
}

export function formatPrice(value: number): string {
  return `Rp ${value.toLocaleString("id-ID")}`
}

export function buildOrderMessage(
  cart: Cart,
  items: { id: string; name: string; price: number }[]
): string {
  const lines = items
    .filter((item) => cart[item.id] > 0)
    .map((item, index) => {
      const qty = cart[item.id]
      return `${index + 1}. ${item.name} x${qty} — ${formatPrice(item.price * qty)}`
    })
  const total = items.reduce(
    (sum, item) => sum + (cart[item.id] ?? 0) * item.price,
    0
  )
  return [
    "*PESANAN DAPOER GIRLI*",
    "",
    ...lines,
    `Total: ${formatPrice(total)}`,
    "",
    "Nama: ...",
    "Alamat: ...",
    "Pengantaran: [Ambil sendiri / Pesan ojol sendiri / Dipesankan resto via ojol]",
  ].join("\n")
}

export function buildOrderUrl(
  cart: Cart,
  items: { id: string; name: string; price: number }[]
): string {
  return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(
    buildOrderMessage(cart, items)
  )}`
}