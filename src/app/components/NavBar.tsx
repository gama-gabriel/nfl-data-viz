"use client";

import React, { useState, useEffect } from "react";
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
import { SunIcon, MoonIcon, CircleIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
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
          className="hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground mx-auto block select-none space-y-1 rounded-md px-2 py-4 text-sm font-medium leading-none  no-underline outline-none transition-colors hover:bg-neutral-300 focus:bg-neutral-300  dark:hover:bg-black dark:focus:bg-black"
        >
          {title}
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div role="status">
        <svg
          aria-hidden="true"
          className="h-5 w-5 animate-spin fill-blue-600/50 text-gray-200 dark:text-gray-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );

  if (resolvedTheme === "dark") {
    return (
      <motion.button
        initial={{ scale: 0, opacity: 0.7 }}
        animate={{
          scale: 1,
          transition: { scale: { delay: 0.5, duration: 0.5 } },
        }}
        whileHover={{ opacity: 1 }}
        onClick={() => setTheme("light")}
      >
        <SunIcon color="#ffffff" className="h-5 w-5" />{" "}
      </motion.button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <motion.button
        initial={{ scale: 0, opacity: 0.7 }}
        animate={{
          scale: 1,
          transition: { scale: { delay: 0.5, duration: 0.5 } },
        }}
        whileHover={{ opacity: 1 }}
        onClick={() => setTheme("dark")}
      >
        <MoonIcon color="#000000" className="h-5 w-5" />{" "}
      </motion.button>
    );
  }
};

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
      className="sticky top-0 z-10 w-full border-b border-neutral-400 bg-white/5 text-sm  backdrop-blur supports-[backdrop-filter]:bg-white/10 dark:border-neutral-700 dark:bg-black/95  dark:supports-[backdrop-filter]:bg-black/60"
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -20 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, delay: 0.2 }}
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
                    transition: { duration: 0.3, delay: 0.2 },
                  },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.3, delay: 0.2 }}
              />

              <motion.p
                className=""
                variants={{
                  visible: { y: 0, opacity: 1 },
                  hidden: { y: -9 },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.3, delay: 0.2 }}
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
            transition={{ duration: 0.3, delay: 0.2 }}
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
                        <div className="relative flex cursor-pointer py-3 text-sm font-bold  decoration-1 underline-offset-4 ">
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
                      <div className="relative flex cursor-pointer py-3 text-sm font-bold  decoration-1 underline-offset-4 ">
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
                      <div className="relative flex cursor-pointer py-3 text-sm font-bold decoration-1 underline-offset-4 ">
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
                      <div className="relative flex cursor-pointer py-3 text-sm font-bold  decoration-1 underline-offset-4 ">
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
          transition={{ duration: 0.3, delay: 0.2 }}
          className="flex w-full justify-end gap-3 px-3"
        >
          <NavitemWrapper className="flex items-center justify-center">
            <p className="px-4 font-bold">About</p>
          </NavitemWrapper>
          <ThemeSwitch />
        </motion.div>
      </div>
    </motion.header>
  );
}
