"use client";

import { DataTableColumnHeader } from "@/components/ui/ColumnHeader";
import { ColumnDef, SortingState } from "@tanstack/react-table";
import Image from "next/image";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Epa_table = {
  id: string;
  team: { name: string; logo: string };
  off_epa: number;
  def_epa: number;
  off_total_epa: number;
  def_total_epa: number;
  off_total_plays: number;
  def_total_plays: number;
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
    accessorKey: "off_epa",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Offensive EPA/play" />
    ),
    cell: ({ row }) => {
      const off_epa = parseFloat(row.getValue<number>("off_epa").toFixed(4));
      return (
        <div className="flex items-center justify-center px-3">{off_epa}</div>
      );
    },
  },

  {
    accessorKey: "def_epa",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Defensive EPA/play" />
    ),
    cell: ({ row }) => {
      const def_epa = parseFloat(row.getValue<number>("def_epa").toFixed(4));
      return (
        <div className="flex items-center justify-center px-3">{def_epa}</div>
      );
    },
    invertSorting: true,
    sortDescFirst: true,
  },

  {
    accessorKey: "off_total_epa",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total offensive EPA" />
    ),
    cell: ({ row }) => {
      const off_total_epa = parseFloat(
        row.getValue<number>("off_total_epa").toFixed(4),
      );
      return (
        <div className="flex items-center justify-center px-3">
          {off_total_epa}
        </div>
      );
    },
  },
  {
    accessorKey: "def_total_epa",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total defensive EPA" />
    ),
    cell: ({ row }) => {
      const def_total_epa = parseFloat(
        row.getValue<number>("def_total_epa").toFixed(4),
      );
      return (
        <div className="flex items-center justify-center px-3">
          {def_total_epa}
        </div>
      );
    },
    invertSorting: true,
    sortDescFirst: true,
  },

  {
    accessorKey: "off_total_plays",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="N° of offensive plays" />
    ),
    cell: ({ row }) => {
      const off_total_plays: Epa_table["off_total_plays"] =
        row.getValue("off_total_plays");
      return (
        <div className="flex items-center justify-center px-3">
          {off_total_plays}
        </div>
      );
    },
  },

  {
    accessorKey: "def_total_plays",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="N° of defensive plays" />
    ),
    cell: ({ row }) => {
      const def_total_plays: Epa_table["def_total_plays"] =
        row.getValue("def_total_plays");
      return (
        <div className="flex items-center justify-center px-3">
          {def_total_plays}
        </div>
      );
    },
  },
];
