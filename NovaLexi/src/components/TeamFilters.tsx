import { useTeamStore } from "@/store/useTeamStore";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, X } from "lucide-react";
import { useTranslations } from 'next-intl';

export function TeamFilters() {
  const { 
    searchTerm, 
    setSearchTerm, 
    roleFilter, 
    setRoleFilter, 
    resetFilters 
  } = useTeamStore();

  const t = useTranslations('TeamDirectory');

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center justify-between bg-card p-4 rounded-lg border shadow-sm">
      
      <div className="w-full sm:w-1/3 relative">
        <Input 
          placeholder={t('searchPlaceholder')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>

      <div className="flex gap-2 w-full sm:w-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full sm:w-[150px] justify-between">
              {roleFilter === 'All' ? t('roleFilter') : roleFilter}
              <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setRoleFilter('All')}>{t('allRoles')}</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setRoleFilter('Admin')}>Admin</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setRoleFilter('Agent')}>Agent</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setRoleFilter('Creator')}>Creator</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {(searchTerm || roleFilter !== 'All') && (
          <Button variant="ghost" onClick={resetFilters} className="text-red-500 hover:text-red-600 hover:bg-red-50">
            <X className="mr-2 h-4 w-4" />
            {t('clear')}
          </Button>
        )}
      </div>
    </div>
  );
}