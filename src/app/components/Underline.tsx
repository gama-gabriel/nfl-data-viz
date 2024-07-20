"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Underline = ({ selected }: { selected: string }) => {
  const pathname = usePathname();
  const parts = pathname.split("/");
  
  return (
    parts[1] == selected && (
      <motion.span
        layout
        layoutId="underline"
        className="absolute left-0 top-full -mt-3 block h-[1px] w-full bg-[#16ff00]"
        aria-hidden="true"
        style={{ originY: "0px" }}
      />
    )
  );
};

export default Underline;
