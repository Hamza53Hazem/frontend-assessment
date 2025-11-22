import { useState, useEffect } from 'react';

export type TeamMember = {
  id: string;
  name: string;
  role: 'Admin' | 'Agent' | 'Creator';
  email: string;
  avatar: string;
};

const MOCK_DATA: TeamMember[] = Array.from({ length: 50 }).map((_, i) => ({
  id: `id-${i}`,
  name: `Employee ${i + 1}`,
  role: i % 3 === 0 ? 'Admin' : i % 3 === 1 ? 'Agent' : 'Creator',
  email: `employee${i + 1}@NovaLexi.com`,
  avatar: `https://i.pravatar.cc/150?u=${i}`,
}));

export const useTeamMembers = (
  page: number, 
  limit: number, 
  roleFilter?: string, 
  search?: string,
  sortBy: string = 'name',
  sortOrder: 'asc' | 'desc' = 'asc'
) => {
  const [data, setData] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      let filtered = [...MOCK_DATA];

      if (roleFilter && roleFilter !== 'All') {
        filtered = filtered.filter(m => m.role === roleFilter);
      }
      if (search) {
        filtered = filtered.filter(m => m.name.toLowerCase().includes(search.toLowerCase()));
      }

      filtered.sort((a, b) => {
        const valA = a[sortBy as keyof TeamMember];
        const valB = b[sortBy as keyof TeamMember];
        
        const modifier = sortOrder === 'asc' ? 1 : -1;

        if (typeof valA === 'string' && typeof valB === 'string') {
          return valA.localeCompare(valB, undefined, { numeric: true, sensitivity: 'base' }) * modifier;
        }
        
        if (valA < valB) return -1 * modifier;
        if (valA > valB) return 1 * modifier;
        return 0;
      });

      setTotal(filtered.length);

      const start = (page - 1) * limit;
      const end = start + limit;
      
      setData(filtered.slice(start, end));
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [page, limit, roleFilter, search, sortBy, sortOrder]);

  return { data, isLoading, total };
};