export function SiteFooter() {
  return (
    <footer className="border-t bg-purple-600 py-6 md:py-0 bg-purple-700 text-slate-400">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row px-4 text-white">
        <p>
          © NovaLexi Assessment. Built by Hamzah.
        </p>
        <p className="hover:text-white cursor-pointer transition-colors">
          Frontend Technical Task
        </p>
      </div>
    </footer>
  );
}