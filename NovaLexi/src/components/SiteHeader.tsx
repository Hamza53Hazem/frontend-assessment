import { LayoutDashboard } from "lucide-react";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header 
      style={{ backgroundColor: 'oklch(36.808% 0.17283 321.248)' }}
      className="border-b border-white/10 sticky top-0 z-50 shadow-md"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white hover:opacity-90 transition-opacity">
          <div 
            className="bg-white p-1.5 rounded-lg"
            style={{ color: 'oklch(36.808% 0.17283 321.248)' }}
          >
            <LayoutDashboard className="h-5 w-5" />
          </div>
          <span>NovaLexi Portal</span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs cursor-pointer hover:bg-white/30 border border-white/20">
            HZ
          </div>
        </div>
      </div>
    </header>
  );
}