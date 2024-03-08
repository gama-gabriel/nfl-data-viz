"use client";

import React, { useState } from "react";
import Acc from "./Expandable";
import Underline from "./Underline";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import NavitemWrapper from "./NavitemWrapper";
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
import { SunIcon } from "@radix-ui/react-icons";
import { MoonIcon } from "@radix-ui/react-icons";
const MotionImage = motion(Image);

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className={cn("", className)}>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          {...props}
          href={props.href!}
          className="hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground mx-auto block select-none space-y-1 rounded-md px-2 py-4 text-sm leading-none no-underline outline-none transition-colors hover:bg-neutral-950 focus:bg-neutral-950"
        >
          {title}
        </Link>
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
      { text: "Pass", ref: "pass" },
      { text: "Run", ref: "run" },
      { text: "Dropback vs Rush", ref: "dropback_rush" },
      { text: "Success rate", ref: "success_rate" },
      { text: "Early downs", ref: "early_downs" },
      { text: "Late Downs", ref: "late_downs" },
      { text: "Screens", ref: "screens" },
      { text: "Trick plays", ref: "trick_plays" },
      { text: "Short yardage", ref: "short_yards" },
      { text: "Motion", ref: "motion" },
      { text: "No huddle", ref: "no_huddle" },
    ],
  };

  const exp_defense = {
    title: "Defensive situations",
    href: "defense",
    content: [
      { text: "Pass", ref: "pass" },
      { text: "Run", ref: "run" },
      { text: "Dropback vs Rush", ref: "dropback_rush" },
      { text: "Success rate", ref: "success_rate" },
      { text: "Early downs", ref: "early_downs" },
      { text: "Late Downs", ref: "late_downs" },
      { text: "Screens", ref: "screens" },
      { text: "Trick plays", ref: "trick_plays" },
      { text: "Short yardage", ref: "short_yards" },
      { text: "Motion", ref: "motion" },
      { text: "No huddle", ref: "no_huddle" },
    ],
  };
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous != undefined) {
      if (latest > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
  });

  return (
    <motion.header
      className="sticky top-0 z-10 w-full border-b border-neutral-700 bg-black/95 text-sm text-white backdrop-blur supports-[backdrop-filter]:bg-black/60"
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -20 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center px-10 py-2">
        <div className="flex gap-4 ">
          <Link className="group px-10" href="/">
            <NavitemWrapper
              initial={0.9}
              className="flex flex-col items-center justify-center"
            >
              <MotionImage
                src={logo}
                width={20}
                height={20}
                alt={"NFL data viz logo"}
                priority
                className="z-10 mx-10 my-auto cursor-pointer"
                variants={{
                  visible: { scale: 1, opacity: 1 },
                  hidden: {
                    scale: 0,
                    opacity: 0,
                    transition: { duration: 0.3 },
                  },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.3 }}
              />

              <motion.p
                className=""
                variants={{
                  visible: { y: 0, opacity: 1 },
                  hidden: { y: -9 },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.3 }}
              >
                <span>nfl</span>
                <span className="font-bold"> data viz</span>
              </motion.p>
            </NavitemWrapper>
          </Link>
          <motion.div
            variants={{
              visible: { y: 0 },
              hidden: { y: 10 },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.3 }}
            className="flex gap-3"
          >
            <NavigationMenu className="">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavitemWrapper className="">
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        <div className="relative flex cursor-pointer py-3 text-sm font-bold text-stone-200 decoration-1 underline-offset-4">
                          <Underline selected="" />
                          Home
                        </div>
                      </NavigationMenuLink>
                    </Link>
                  </NavitemWrapper>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu className="">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavitemWrapper className="">
                    <NavigationMenuTrigger>
                      <div className="relative flex cursor-pointer py-3 text-sm font-bold text-stone-200 decoration-1 underline-offset-4">
                        <Underline selected={"general"} />
                        General
                      </div>
                    </NavigationMenuTrigger>
                  </NavitemWrapper>
                  <NavigationMenuContent className="">
                    <ul className="grid w-56 px-4 py-3">
                      <ListItem
                        href="/general"
                        title="Home"
                        className=""
                      ></ListItem>
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
                  <NavitemWrapper className="">
                    <NavigationMenuTrigger>
                      <div className="relative flex cursor-pointer py-3 text-sm font-bold text-stone-200 decoration-1 underline-offset-4">
                        <Underline selected={"teams"} />
                        Teams
                      </div>
                    </NavigationMenuTrigger>
                  </NavitemWrapper>
                  <NavigationMenuContent>
                    <ul className="grid w-56 px-4 py-3">
                      <ListItem
                        href="/teams"
                        title="Home"
                        className=""
                      ></ListItem>
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
                  <NavitemWrapper className="">
                    <NavigationMenuTrigger>
                      <div className="relative flex cursor-pointer py-3 text-sm font-bold text-stone-200 decoration-1 underline-offset-4">
                        <Underline selected={"players"} />
                        Players
                      </div>
                    </NavigationMenuTrigger>
                  </NavitemWrapper>
                  <NavigationMenuContent>
                    <ul className="grid w-56 px-4 py-3">
                      <ListItem
                        href="/players"
                        title="Home"
                        className=""
                      ></ListItem>
                      <ListItem
                        href="/players/quarterbacks"
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
        <motion.div
          variants={{
            visible: { y: 0 },
            hidden: { y: 10 },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.3 }}
          className="flex w-full justify-end gap-3 "
        >
          <SunIcon className="h-5 w-5 " color="#ffffff" />
          <NavitemWrapper>
          <p className="px-4 font-bold">About</p>
          </NavitemWrapper>
        </motion.div>
      </div>
    </motion.header>
  );
}
