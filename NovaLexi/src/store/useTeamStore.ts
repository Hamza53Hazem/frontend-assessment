import { create } from 'zustand';

interface TeamState {
  searchTerm: string;
  roleFilter: string;
  currentPage: number;
  itemsPerPage: number;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
  view: 'grid' | 'table';
  
  setSearchTerm: (term: string) => void;
  setRoleFilter: (role: string) => void;
  setPage: (page: number) => void;
  setSorting: (field: string) => void;
  setView: (view: 'grid' | 'table') => void;
  resetFilters: () => void;
}

export const useTeamStore = create<TeamState>((set) => ({
  searchTerm: '',
  roleFilter: 'All',
  currentPage: 1,
  itemsPerPage: 9,
  sortBy: 'name',
  sortOrder: 'asc',
  view: 'table',

  setSearchTerm: (term) => set({ searchTerm: term, currentPage: 1 }),
  setRoleFilter: (role) => set({ roleFilter: role, currentPage: 1 }),
  setPage: (page) => set({ currentPage: page }),
  
  setSorting: (field) => set((state) => ({
    sortBy: field,
    sortOrder: state.sortBy === field && state.sortOrder === 'asc' ? 'desc' : 'asc'
  })),

  setView: (view) => set({ view }),
  
  resetFilters: () => set({ 
    searchTerm: '', 
    roleFilter: 'All', 
    currentPage: 1,
    sortBy: 'name',
    sortOrder: 'asc'
  }),
}));