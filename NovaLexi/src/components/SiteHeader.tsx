import { LayoutDashboard } from "lucide-react";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b bg-purple-600 bg-purple-700 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white hover:opacity-80 transition-opacity">
          <div className="bg-white text-purple-700 p-1.5 rounded-lg">
            <LayoutDashboard className="h-5 w-5" />
          </div>
          <span>NovaLexi Portal</span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="h-8 w-8 rounded-full bg-purple-700 flex items-center justify-center text-white font-bold text-xs cursor-pointer hover:bg-purple-600 border border-purple-600">
            HZ
          </div>
        </div>
      </div>
    </header>
  );
}