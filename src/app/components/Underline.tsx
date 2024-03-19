"use client";
import { motion, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Underline = ({ selected }: { selected: string }) => {
  const pathname = usePathname();
   const parts = pathname.split("/");
  const [prevPathname, setPrevPathname] = useState(pathname);

  const { scrollY } = useScroll();

  useEffect(() => {
    if (pathname !== prevPathname) {
      setPrevPathname(pathname);
    }
  }, [pathname, prevPathname]);

  return (
    parts[1] == selected && (
      <motion.span
        layoutId="underline"
        className="absolute left-0 top-full block -mt-3 h-[1px] w-full bg-[#16ff00]"
        style={
          pathname != prevPathname ? { translateY: scrollY.get() } : { translateY: 0 }
        }
      />
    )
  );
};

export default Underline;
