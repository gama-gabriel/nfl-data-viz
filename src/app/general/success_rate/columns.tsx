"use client";

import { DataTableColumnHeader } from "@/components/ui/ColumnHeader";
import { ColumnDef, SortingState } from "@tanstack/react-table";
import Image from "next/image";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Epa_table = {
  id: string;
  team: { name: string; logo: string };
  off_succ: number;
  def_succ: number;
};

export const columns: ColumnDef<Epa_table>[] = [
  {
    accessorKey: "team",
    header: () => (
      <div className="flex items-center justify-start ps-24">Team</div>
    ),
    cell: ({ row, column, table }) => {
      const team: Epa_table["team"] = row.getValue("team");
      const rowModel = table.getSortedRowModel();
      let index = 0;
      if (table.getState().sorting[0]?.desc === false) {
        const reversedRows = rowModel?.flatRows?.reverse();
        index =
          reversedRows.length -
          1 -
          reversedRows.findIndex((flatRow) => flatRow.id === row.id);
      } else {
        index = rowModel?.rows?.findIndex((flatRow) => flatRow.id === row.id);
      }
      return (
        <div className="min-w-48 flex h-full items-center justify-start gap-5 px-2">
          <div className="w-6">{index + 1}</div>
          <Image
            height={200}
            width={200}
            src={team.logo}
            alt="team"
            className="h-8 w-8"
          />
          <div>{team.name}</div>
        </div>
      );
    },
  },

  {
    accessorKey: "id",
    header: ({ column }) => (
      <div className="flex items-center justify-center">Abbreviation</div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        {row.getValue("id")}
      </div>
    ),
  },

  {
    accessorKey: "off_succ",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Offensive success rate" />
    ),
    cell: ({ row }) => {
      const off_succ = (
        parseFloat(row.getValue<string>("off_succ")) * 100
      ).toFixed(2);
      return (
        <div className="flex items-center justify-center px-3">{off_succ}%</div>
      );
    },
  },

  {
    accessorKey: "def_succ",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Defensive success rate" />
    ),
    cell: ({ row }) => {
      const def_succ = (
        parseFloat(row.getValue<string>("def_succ")) * 100
      ).toFixed(2);
      return (
        <div className="flex items-center justify-center px-3">{def_succ}%</div>
      );
    },
    invertSorting: true,
    sortDescFirst: true,
  },
];
