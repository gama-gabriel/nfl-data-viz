import React from "react";
import {
  CaretUpIcon,
  CaretDownIcon,
  CaretSortIcon,
} from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Column } from "@tanstack/react-table";
import { motion } from "framer-motion";

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

const MotionArrowDown = motion(CaretDownIcon);
const MotionArrowUp = motion(CaretUpIcon);

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div>{title}</div>;
  }

  return (
    <div className="flex items-center justify-center">
      <motion.button
        className="inline-flex items-center gap-1 py-2 rounded-md px-3 mx-auto"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        whileTap={{ scale: 0.95 }}
        whileHover={{ backgroundColor: "#d4d4d4" }}
        initial={{ backgroundColor: "#d4d4d400" }}
      >
        {title}
        {column.getIsSorted() === "desc" ? (
          <MotionArrowDown
            initial={{ rotate: 180 }}
            animate={{ rotate: 0, transition: { duration: 0.3 } }}
            className="h-4 w-4"
          />
        ) : column.getIsSorted() === "asc" ? (
          <MotionArrowUp
            initial={{ rotate: 180 }}
            animate={{ rotate: 0, transition: { duration: 0.3 } }}
            className="h-4 w-4"
          />
        ) : (
          <CaretSortIcon className="h-4 w-4" />
        )}
      </motion.button>
    </div>
  );
}
