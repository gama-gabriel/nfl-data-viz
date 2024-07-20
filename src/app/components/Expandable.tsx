"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, stagger } from "framer-motion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const container = {
  hidden: { opacity: 0, height: 0, width: "auto" },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      staggerChildren: 0.1,
      delay: 0.005,
    },
  },
};

const son = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <motion.li variants={son}>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:text-accent-foreground block select-none space-y-1 rounded-md px-4 py-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-neutral-300 focus:bg-neutral-300  dark:hover:bg-black dark:focus:bg-black",
            className,
          )}
          {...props}
        >
          {title}
        </a>
      </NavigationMenuLink>
    </motion.li>
  );
});
ListItem.displayName = "ListItem";

const Expandable = ({ items }: { items: any }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Collapsible open={open} onOpenChange={setOpen}>
        <div className="flex w-full items-center">
          <CollapsibleTrigger asChild>
            <button className="group flex w-full items-center justify-between rounded-md px-2 py-3 text-sm leading-none no-underline outline-none hover:bg-neutral-300 focus:bg-neutral-300  dark:hover:bg-black dark:focus:bg-black group-data-[state=open]:font-bold">
              <span className="sr-only">Toggle</span>
              {items.title}
              <ChevronDownIcon
                className="h-4 w-4 transition duration-300 group-data-[state=open]:rotate-180"
                aria-hidden="true"
              />
            </button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <AnimatePresence>
            <ScrollArea className="h-[8.5rem]">
              <motion.ul
                variants={container}
                initial="hidden"
                animate="show"
                exit={{ height: 0, opacity: 0, transition: { delay: 0 } }}
              >
                {items.content.map((content: any) => (
                  <ListItem
                    href={`/${items.href}/${content.ref}`}
                    title={content.text}
                    className=""
                    key={content}
                  />
                ))}
              </motion.ul>
              <ScrollBar className="bg-stone-900" />
            </ScrollArea>
          </AnimatePresence>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
};

export default Expandable;
