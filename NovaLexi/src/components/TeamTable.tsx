import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { TeamMember } from "@/hooks/useTeamMembers";
import { useTeamStore } from "@/store/useTeamStore";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';

interface TeamTableProps {
  data: TeamMember[];
}

export function TeamTable({ data }: TeamTableProps) {
  const { sortBy, sortOrder, setSorting } = useTeamStore();
  const t = useTranslations('TeamDirectory');

  const columns: ColumnDef<TeamMember>[] = [
    {
      accessorKey: "avatar",
      header: t('avatar'),
      cell: ({ row }) => (
        <Avatar className="h-8 w-8">
          <AvatarImage src={row.original.avatar} />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      ),
    },
    {
      accessorKey: "name",
      header: () => (
        <Button 
          variant="ghost" 
          onClick={() => setSorting('name')}
          className="pl-0 hover:bg-transparent"
        >
          {t('name')} 
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
    },
    {
      accessorKey: "role",
      header: () => (
        <Button 
          variant="ghost" 
          onClick={() => setSorting('role')}
          className="pl-0 hover:bg-transparent"
        >
          {t('role')}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => {
        const role = row.getValue("role") as string;
        return (
          <Badge variant={role === 'Admin' ? 'default' : 'secondary'}>
            {role}
          </Badge>
        );
      },
    },
    {
      accessorKey: "email",
      header: t('email'),
      cell: ({ row }) => <div className="text-muted-foreground">{row.getValue("email")}</div>,
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualSorting: true,
  });

  return (
    <div className="rounded-md border bg-card">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} className="text-start"> 
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                {t('noResults')}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}