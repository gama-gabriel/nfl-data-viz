"use client";

import React, { useEffect, useRef, useState } from "react";
import Acc from "./CollapsibleElement";

import Underline from "./Underline";
import logo from "../../../public/logo.svg";
import hamburger from "../resources/hamburger.svg";
import Image from "next/image";
import Link from "next/link";
import DropdownWrapper from "./DropdownWrapper";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

const MotionImage = motion(Image);

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className={cn("", className)}>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          {...props}
          className="text-sm mx-auto block select-none space-y-1 rounded-md py-4 px-2 leading-none no-underline outline-none transition-colors hover:bg-neutral-950 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:bg-neutral-950"
        >
          {title}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function NavBar() {
  const general_items = {
    title: "Offensive situations",
    href: "offense",
    content: [
      "Pass",
      "Rush",
      "Dropback vs Rush",
      "Success rate",
      "Early downs",
      "Late Downs",
      "Screens",
      "Trick plays",
      "Short yardage",
      "Motion",
      "No huddle",
    ],
  };

  const links = [
    { href: "/", label: "Home", dropdown: false, underline: "" },
    {
      href: "/general",
      label: "General",
      dropdown: true,
      drop_items: [
        { label: "EPA", href: "/general/epa" },
        { label: "Success Rate", href: "/general/success_rate" },
      ],
      accordion: true,
      acc_items: general_items,
      underline: "general",
    },
    {
      href: "/teams",
      label: "Teams",
      dropdown: true,
      drop_items: [
        { label: "EPA", href: "general/epa" },
        { label: "Success Rate", href: "general/success_rate" },
      ],
      accordion: true,
      acc_items: general_items,
      underline: "teams",
    },
    {
      href: "/players",
      label: "Players",
      dropdown: true,
      drop_items: [
        { label: "EPA", href: "general/epa" },
        { label: "Success Rate", href: "/players/quarterbacks" },
      ],
      accordion: true,
      acc_items: general_items,
      underline: "players",
    },
  ];

  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    console.log(`${hidden}`);
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div
      className="sticky top-0 bg-neutral-900 border-b border-neutral-700 text-white text-sm"
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -20 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: "easeOut", duration: 0.1 }}
    >
      <section className="m-0 px-6 py-2 bg-transparent w-full gap-4 flex top-0">
        <Link className="mx-12 my-auto group" href="/">
          <DropdownWrapper initial={0.9}>
            <MotionImage
              src={logo}
              width={20}
              height={20}
              alt={"NFL data viz logo"}
              className="cursor-pointer my-auto mx-12 z-10"
              variants={{
                visible: { scale: 1, opacity: 1 },
                hidden: { scale: 0 },
              }}
              animate={hidden ? "hidden" : "visible"}
            />

            <motion.p
              className="mx-auto my-auto w-fit"
              variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: -9 },
              }}
              animate={hidden ? "hidden" : "visible"}
              transition={{ ease: "easeOut", duration: 0.1 }}
            >
              <span>nfl</span>
              <span className="font-bold"> data viz</span>
            </motion.p>
          </DropdownWrapper>
        </Link>
        <motion.div
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: { y: 10 },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ ease: "easeOut", duration: 0.1 }}
          className="flex gap-3"
        >
          <NavigationMenu className="">
            <NavigationMenuList className="gap-3">
              <NavigationMenuItem>
                <DropdownWrapper className="">
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      <p className="flex relative py-3 font-bold text-sm cursor-pointer underline-offset-4 decoration-1 text-stone-200">
                        <Underline selected="/" />
                        Home
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </DropdownWrapper>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu className="">
            <NavigationMenuList className="gap-3">
              <NavigationMenuItem>
                <DropdownWrapper className="">
                  <NavigationMenuTrigger>General</NavigationMenuTrigger>
                </DropdownWrapper>
                <NavigationMenuContent className="">
                  <ul className="grid px-4 py-3 w-56">
                    <ListItem href="/docs" title="Home" className=""></ListItem>
                    <ListItem
                      href="/docs/installation"
                      title="EPA"
                      className=""
                    ></ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Success Rate"
                      className=""
                    ></ListItem>
                    <Acc items={general_items} />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu className="">
            <NavigationMenuList className="gap-3">
              <NavigationMenuItem>
                <DropdownWrapper className="">
                  <NavigationMenuTrigger>Teams</NavigationMenuTrigger>
                </DropdownWrapper>
                <NavigationMenuContent>
                  <ul className="grid px-4 py-3 w-56">
                    <ListItem href="/docs" title="Home" className=""></ListItem>
                    <ListItem
                      href="/docs/installation"
                      title="EPA"
                      className=""
                    ></ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Success Rate"
                      className=""
                    ></ListItem>
                    <Acc items={general_items} />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu className="">
            <NavigationMenuList className="gap-3">
              <NavigationMenuItem>
                <DropdownWrapper className="">
                  <NavigationMenuTrigger>Players</NavigationMenuTrigger>
                </DropdownWrapper>
                <NavigationMenuContent>
                  <ul className="grid px-4 py-3 w-56">
                    <ListItem href="/docs" title="Home" className=""></ListItem>
                    <ListItem
                      href="/docs/installation"
                      title="EPA"
                      className=""
                    ></ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Success Rate"
                      className=""
                    ></ListItem>
                    <Acc items={general_items} />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </motion.div>
      </section>
    </motion.div>
  );
}
