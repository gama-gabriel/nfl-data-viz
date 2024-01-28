"use client";

import React from "react";
import Acc from "./CollapsibleElement";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import Balloon from "./Balloon";
import Underline from "./Underline";
import logo from "../../../public/logo.svg";
import hamburger from "../resources/hamburger.svg";
import Img from "next/image";
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

  return (
    <div className="m-0 px-6 py-4 bg-transparent border-b border-neutral-800 w-full gap-4 flex top-0">
      <Img
        src={hamburger}
        width={20}
        height={20}
        alt={"Menu"}
        className="cursor-pointer my-auto mx-4 invisible"
      ></Img>
      <Img
        src={logo}
        width={70}
        height={70}
        alt={"NFL data viz logo"}
        className="cursor-pointer my-auto mx-12"
      ></Img>
      

        <NavigationMenu className="">
          <NavigationMenuList className="gap-3">
            <NavigationMenuItem>
              <DropdownWrapper className="">
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'flex relative py-3 font-bold text-sm cursor-pointer underline-offset-4 decoration-1 text-stone-200', className)}>
                    <Underline selected='/'/>
                    <p className=''>
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
                <NavigationMenuTrigger>
                    General
                </NavigationMenuTrigger>
              </DropdownWrapper>
              <NavigationMenuContent className=''>
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
                <NavigationMenuTrigger>
                    Teams
                </NavigationMenuTrigger>
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
                <NavigationMenuTrigger>
                    Players
                </NavigationMenuTrigger>
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
        
    
    </div>
  );
}
