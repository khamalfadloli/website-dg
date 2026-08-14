export default function CartBubble({
  count,
  onOpen,
}: {
  count: number
  onOpen: () => void
}) {
  if (count <= 0) return null
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Buka keranjang, ${count} item`}
      className="fixed right-4 bottom-[calc(5.5rem+env(safe-area-inset-bottom))] md:right-6 md:bottom-6 z-50 w-14 h-14 rounded-full bg-primary text-white shadow-lg shadow-primary/30 inline-flex items-center justify-center active:scale-95 transition-all"
    >
      <span className="material-symbols-outlined text-[26px]">
        shopping_cart
      </span>
      <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-secondary text-on-secondary text-xs font-bold inline-flex items-center justify-center shadow">
        {count}
      </span>
    </button>
  )
}