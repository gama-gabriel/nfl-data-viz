'use client'

import React, { useState } from 'react';
import Link from 'next/link'
import { motion, AnimatePresence, stagger } from "framer-motion"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ChevronDownIcon } from "@radix-ui/react-icons"

const container = {
  hidden: { opacity: 0, height: 0, width: 0 },
  show: {
    opacity: 1,
    height: 'auto',
    width: 'auto', 
    transition: {
      staggerChildren: 0.10,
      delay: 0.005
    }
  }
  
}

const son = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
return (
  <motion.li variants={son}>
    <NavigationMenuLink asChild>
      <Link
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md py-3 px-4 leading-none no-underline outline-none transition-colors hover:bg-neutral-800 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:bg-neutral-800 text-sm",
          className
        )}
        {...props}
      >
        {title}
      </Link>
    </NavigationMenuLink>
  </motion.li>
)
})
ListItem.displayName = "ListItem"

const CollapsibleElement = ({ items }: {items: object}) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Collapsible open={open} onOpenChange={setOpen}>
        <div className="flex w-full items-center">
          <CollapsibleTrigger asChild>
            <button className="flex w-full rounded-md px-1 justify-between items-center group text-sm hover:bg-neutral-800 focus:font-bold py-3">
              <span className="sr-only">Toggle</span>
              {items.title}
              <ChevronDownIcon className='h-4 w-4 transition duration-300 group-data-[state=open]:rotate-180' />
            </button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="data-[state=closed]:animate-collapsible-up">
        <AnimatePresence>
        <ScrollArea className="h-72 ">
          <motion.ul variants={container}
              initial="hidden"
              animate="show"
              exit={{ height: 0, opacity: 0, transition: { delay: 0.05 }}}>
              {items.content.map((content) => (
              <ListItem href="/docs" title={content} className='' key={content} />  
              ))}
          </motion.ul>
          <ScrollBar className='bg-stone-900'/>
        </ScrollArea>
        </AnimatePresence>  
        </CollapsibleContent>
        
      </Collapsible>
    </>
  );
}

export default CollapsibleElement;