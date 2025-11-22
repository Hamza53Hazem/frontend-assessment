export function SiteFooter() {
  return (
    <footer 
      style={{ backgroundColor: 'oklch(36.808% 0.17283 321.248)' }}
      className="border-t border-white/10 py-6 md:py-0 text-white/80"
    >
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row px-4 text-sm">
        <p>
          © NovaLexi Assessment. Built by Hamzah.
        </p>
        <p className="hover:text-white cursor-pointer transition-colors font-medium">
          Frontend Technical Task
        </p>
      </div>
    </footer>
  );
}