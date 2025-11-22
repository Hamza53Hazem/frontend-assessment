"use client";

import { useTeamStore } from "@/store/useTeamStore";
import { useTeamMembers } from "@/hooks/useTeamMembers";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { TeamFilters } from "@/components/TeamFilters";
import { TeamTable } from "@/components/TeamTable";
import { Skeleton } from "@/components/ui/skeleton";
import { LayoutGrid, Table as TableIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';

export default function TeamDirectoryPage() {
  const t = useTranslations('TeamDirectory');

  const { 
    currentPage, 
    itemsPerPage, 
    roleFilter, 
    searchTerm,
    sortBy,       
    sortOrder,    
    view,         
    setView,      
    setPage 
  } = useTeamStore();

  const { data, isLoading, total } = useTeamMembers(
    currentPage, 
    itemsPerPage, 
    roleFilter, 
    searchTerm,
    sortBy,
    sortOrder
  );
  
  const totalPages = Math.ceil(total / itemsPerPage);

  return (
    <div className="container mx-auto py-20 px-4 max-w-6xl">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-primary">{t('title')}</h1>
          <p className="text-muted-foreground mt-2">{t('description')}</p>
        </div>
        
        <div className="flex gap-2 bg-muted p-1 rounded-lg">
          <Button 
            variant={view === 'table' ? 'default' : 'ghost'} 
            size="sm" 
            onClick={() => setView('table')}
          >
            <TableIcon className="h-4 w-4 mr-2" /> {t('table')}
          </Button>
          <Button 
            variant={view === 'grid' ? 'default' : 'ghost'} 
            size="sm" 
            onClick={() => setView('grid')}
          >
            <LayoutGrid className="h-4 w-4 mr-2" /> {t('grid')}
          </Button>
        </div>
      </div>

      <TeamFilters />

      {isLoading ? (
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-16 w-full rounded-lg" />
          ))}
        </div>
      ) : data.length > 0 ? (
        view === 'table' ? (
          <TeamTable data={data} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        )
      ) : (
        <div className="text-center py-20 text-muted-foreground">
          {t('noResults')}
        </div>
      )}

      {!isLoading && data.length > 0 && (
        <div className="flex justify-center items-center gap-2 mt-12">
          
          <Button
            variant="outline"
            size="icon"
            disabled={currentPage === 1}
            onClick={() => setPage(currentPage - 1)}
            className="h-10 w-10"
          >
            <span className="sr-only">Previous</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m15 18-6-6 6-6"/></svg>
          </Button>

          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <Button
                key={pageNum}
                variant={currentPage === pageNum ? "default" : "ghost"}
                size="sm"
                onClick={() => setPage(pageNum)}
                className={`w-10 h-10 rounded-md ${currentPage === pageNum ? "font-bold shadow-md" : "text-muted-foreground"}`}
              >
                {pageNum}
              </Button>
            ))}
          </div>

          <Button 
            variant="outline"
            size="icon"
            disabled={currentPage === totalPages}
            onClick={() => setPage(currentPage + 1)}
            className="h-10 w-10"
          >
             <span className="sr-only">Next</span>
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m9 18 6-6-6-6"/></svg>
          </Button>
        </div>
      )}
    </div>
  );
}