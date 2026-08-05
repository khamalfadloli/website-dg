export default function MobileActionBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface border-t border-outline-variant/30 px-margin-mobile pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex gap-3">
        <a
          href="https://wa.me/62895602433100"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 text-white font-body text-sm font-bold py-3 rounded-full active:scale-95 transition-all shadow-md"
        >
          <span className="material-symbols-outlined text-base">chat</span>
          Order via WhatsApp
        </a>
        <a
          href="tel:+62895602433100"
          aria-label="Telepon Dapoer Girli"
          className="inline-flex items-center justify-center w-[52px] bg-primary-container text-on-primary-container rounded-full active:scale-95 transition-all shadow-md"
        >
          <span className="material-symbols-outlined text-[22px]">call</span>
        </a>
      </div>
    </div>
  )
}
