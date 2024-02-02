"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Underline({ selected }: { selected: string }) {
  const { scrollY } = useScroll();

  const scrollValue = scrollY.get();

  const pathname = usePathname();
  const parts = pathname.split("/");

  const [prevPathname, setPrevPathname] = useState(pathname);

  useEffect(() => {
    if (pathname !== prevPathname) {
      setPrevPathname(pathname);
    }
  }, [pathname, prevPathname]);

  return (
    <>
      {selected == parts[1] && (
        <motion.span
          layoutId="underline"
          className="absolute left-0 top-full block -mt-3 h-[1px] w-full bg-lime-500"
          style={
            pathname != prevPathname
              ? {
                  transform: `translateY(${scrollValue}px)`,
                }
              : { transform: "" }
          }
          aria-hidden="true"
        />
      )}
    </>
  );
}
