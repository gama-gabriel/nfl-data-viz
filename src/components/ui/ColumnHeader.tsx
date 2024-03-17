import React from "react";
import {
  CaretUpIcon,
  CaretDownIcon,
  CaretSortIcon,
} from "@radix-ui/react-icons";
import { Column } from "@tanstack/react-table";
import { motion } from "framer-motion";

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

const MotionArrowDown = motion(CaretDownIcon);
const MotionArrowUp = motion(CaretUpIcon);
const MotionSort = motion(CaretSortIcon);

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
        className="mx-auto inline-flex items-center gap-1 rounded-md px-3 py-2"
        onClick={column.getToggleSortingHandler() }
        whileTap={{ scale: 0.95 }}
        whileHover={{ backgroundColor: "#262626" }}
        initial={{ backgroundColor: "#26262600" }}
      >
        {title}
        {column.getIsSorted() === "asc" ? (
          <MotionArrowUp
            initial={{ rotate: 180 }}
            animate={{ rotate: 0, transition: { duration: 0.3 } }}
            className="h-8 w-8"
          />
        ) : column.getIsSorted() === "desc" ? (
          <MotionArrowDown
            initial={{ rotate: 180 }}
            animate={{ rotate: 0, transition: { duration: 0.3 } }}
            className="h-8 w-8"
          />
        ) : (
          <MotionSort
            initial={{ scale: 0.5 }}
            animate={{ scale: 1, transition: { duration: 0.3 } }}
            className="h-8 w-8"
          />
        )}
      </motion.button>
    </div>
  );
}
