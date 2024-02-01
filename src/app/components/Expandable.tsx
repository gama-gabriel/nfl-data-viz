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
  hidden: { opacity: 0, height: 0, width: 'auto' },
  show: {
    opacity: 1,
    height: 'auto',
    transition: {
      staggerChildren: 0.1,
      delay: 0.005,
    },
  },
};

const MotionScroll = motion(ScrollArea)

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
            "block select-none space-y-1 rounded-md py-3 px-4 leading-none no-underline outline-none transition-colors hover:bg-neutral-950 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:bg-neutral-950 text-sm",
            className
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

const Expandable = ({ items }: { items: object }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Collapsible open={open} onOpenChange={setOpen}>
        <div className="flex w-full items-center">
          <CollapsibleTrigger asChild>
            <button className="leading-none no-underline outline-none flex w-full rounded-md px-2 justify-between items-center group text-sm hover:bg-neutral-950 focus:bg-neutral-950 group-data-[state=open]:font-bold py-3">
              <span className="sr-only">Toggle</span>
              {items.title}
              <ChevronDownIcon
                className="h-4 w-4 transition duration-300 group-data-[state=open]:rotate-180"
                aria-hidden="true"
              />
            </button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="data-[state=closed]:animate-collapsible-up">
          <AnimatePresence>
            <MotionScroll initial={{ height: 0 }} animate={{height: '18rem'}} className="h-72">
              <motion.ul
                variants={container}
                initial='hidden'
                animate='show'
                exit={{ height: 0, opacity: 0, transition: { delay: 0 } }}
              >
                {items.content.map((content) => (
                  <ListItem
                    href={`/${items.href}/${content.ref}`}
                    title={content.text}
                    className=""
                    key={content}
                  />
                ))}
              </motion.ul>
              <ScrollBar className="bg-stone-900" />
            </MotionScroll>
          </AnimatePresence>
        </CollapsibleContent>
      </Collapsible>
    </>
  );
};

export default Expandable;
