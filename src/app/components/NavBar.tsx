"use client";

import React, { useEffect, useRef, useState } from "react";
import Acc from "./Expandable";

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
  const exp_offense = {
    title: "Offensive situations",
    href: "offense",
    content: [
      {text: "Pass", ref: 'pass'},
      {text: "Run", ref: 'run'},
      {text: "Dropback vs Rush", ref: 'dropback_rush'},
      {text: "Success rate", ref: 'success_rate'},
      {text: "Early downs", ref: 'early_downs'},
      {text: "Late Downs", ref: 'late_downs'},
      {text: "Screens", ref: 'screens'},
      {text: "Trick plays", ref: 'trick_plays'},
      {text: "Short yardage", ref: 'short_yards'},
      {text: "Motion", ref: 'motion'},
      {text: "No huddle", ref: 'no_huddle'},
    ],
  };

  const exp_defense = {
    title: "Defensive situations",
    href: "defense",
    content: [
      {text: "Pass", ref: 'pass'},
      {text: "Run", ref: 'run'},
      {text: "Dropback vs Rush", ref: 'dropback_rush'},
      {text: "Success rate", ref: 'success_rate'},
      {text: "Early downs", ref: 'early_downs'},
      {text: "Late Downs", ref: 'late_downs'},
      {text: "Screens", ref: 'screens'},
      {text: "Trick plays", ref: 'trick_plays'},
      {text: "Short yardage", ref: 'short_yards'},
      {text: "Motion", ref: 'motion'},
      {text: "No huddle", ref: 'no_huddle'},
    ],
  };
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous != undefined) {
      if (latest > previous && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
  });
  function template({ y, z }: { y: number; z: number }) {
    return `translateY(${y}) translateZ(${z})`;
  }

  return (
    <motion.header
      className="sticky top-0 bg-neutral-900 border-b border-neutral-700 text-white text-sm"
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -20 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ type: "spring", duration: 0.1 }}
    >
      <div className="m-0 px-6 py-2 w-full gap-4 flex">
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
                hidden: { scale: 0, opacity: 0 },
              }}
              animate={hidden ? "hidden" : "visible"}
              transition={{ duration: 0.2 }}
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
            visible: { y: 0 },
            hidden: { y: 10 },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.1, type: "spring" }}
          className="flex gap-3"
        >
          <NavigationMenu className="">
            <NavigationMenuList>
              <NavigationMenuItem>
                <DropdownWrapper className="">
                  <Link href="/" legacyBehavior passHref>
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
            <NavigationMenuList>
              <NavigationMenuItem>
                <DropdownWrapper className="">
                  <NavigationMenuTrigger>General</NavigationMenuTrigger>
                </DropdownWrapper>
                <NavigationMenuContent className="">
                  <ul className="grid px-4 py-3 w-56">
                    <ListItem href="/docs" title="Home" className=""></ListItem>
                    <ListItem
                      href="/general/epa"
                      title="EPA"
                      className=""
                    ></ListItem>
                    <ListItem
                      href="/general/success_rate"
                      title="Success Rate"
                      className=""
                    ></ListItem>
                    <Acc items={exp_offense} />
                    <Acc items={exp_defense} />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu className="">
            <NavigationMenuList>
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
                    <Acc items={exp_offense} />
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
                    <Acc items={exp_offense} />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

        </motion.div>
      </div>
    </motion.header>
  );
}
