"use client";
import React, { useRef, useState } from "react";
import LogoSvg from "./components/svg/LogoSvg";
import { useInView, motion } from "framer-motion";
import StatsSvg from "./components/svg/StatsSvg";
import ChartSvg from "./components/svg/ChartSvg";
import FilterSvg from "./components/svg/FilterSvg";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import NflSvg from "./components/svg/NflSvg";
import TeamSvg from "./components/svg/TeamSvg";
import HelmetSvg from "./components/svg/HelmetSvg";

export default function Menu() {
  const ref = useRef<HTMLDivElement>(null);
  const view = useInView(ref, { margin: "-60% 0px -50% 0px" });

  const gridRef = useRef<HTMLDivElement>(null);
  const gridView = useInView(gridRef, { margin: "10% 0px 10% 0px" });

  const MotionArrow = motion(ArrowRightIcon);
  const MotionLink = motion(Link);

  return (
    <>
      <motion.div
        className="grid w-full grid-cols-2 bg-gradient-to-t from-transparent to-transparent px-6 py-28 xl:px-10"
        ref={ref}
        animate={
          view
            ? {
                background:
                  "linear-gradient(to bottom, #2c0049, #090011, #000000)",
                transition: { duration: 5, delay: 0.5 },
              }
            : {
                background:
                  "linear-gradient(to bottom, #000000, #000000, #000000)",
                transition: { duration: 1 },
              }
        }
      >
        <div className="flex max-h-96 flex-col px-12">
          <motion.h1 className="text-center text-4xl font-bold xl:text-5xl">
            Combining the thrill of football with the power of data
          </motion.h1>
          <h3 className="my-auto h-fit px-8 text-center text-lg xl:text-xl">
            Visualize and navigate through various sets of NFL statistics, in a
            rich and immersive experience for football enthusiasts
          </h3>
          <motion.button
            className="mx-auto inline-flex w-fit items-center justify-center rounded-sm border border-[#16ff00] bg-transparent px-6 py-3 align-bottom font-bold"
            variants={{ hover: { backgroundColor: "#16ff0010" } }}
            whileHover="hover"
          >
            Get started{" "}
            <MotionArrow
              color="#16ff00"
              className="relative ms-2 opacity-70"
              variants={{ hover: { x: 10, opacity: 1 } }}
            />
          </motion.button>
        </div>
        <div className="mx-auto pe-24">
          <LogoSvg />
        </div>
      </motion.div>
      <div className="pb-20">
        <h2 className="mx-auto h-fit w-fit py-20 text-4xl font-bold">
          Features
        </h2>

        <motion.div
          className="mx-auto flex h-56 w-full justify-center gap-3 divide-x-[1px] divide-neutral-500 px-10 2xl:w-full"
          ref={gridRef}
          animate={gridView ? "rest" : "hidden"}
        >
          <div className="w-[calc(30%)] px-4 ">
            <StatsSvg />
            <h2 className="p-3 text-center text-2xl font-bold ">
              NFL advanced stats simplified
            </h2>
            <p className="p-3 text-center text-lg">
              In a easy way to understand, yet extremely detailed
            </p>
          </div>

          <div className="w-[calc(30%)] px-4">
            <ChartSvg />
            <h2 className="p-3 text-center text-2xl font-bold">
              Dynamic and interactive charts and tables
            </h2>
            <p className="p-3 text-center text-lg">
              In a easy way to understand, yet extremely detailed
            </p>
          </div>

          <div className="w-[calc(30%)] px-4">
            <FilterSvg />
            <h2 className="p-3 text-center text-2xl font-bold">
              Customizable data filters
            </h2>
            <p className="p-3 text-center text-lg">
              In a easy way to understand, yet extremely detailed
            </p>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center py-20">
        <h2 className="py-2 text-4xl font-bold">Getting started</h2>
        <h3 className="text-xl">Start with the dataset you prefer</h3>
      </div>

      <div className="flex items-center justify-center gap-5">
        <MotionLink
          href="/general/home"
          className="flex items-center justify-center px-6 py-4 "
          initial="rest"
          whileHover="hover"
        >
          <NflSvg></NflSvg>
          <div className="flex flex-col items-center justify-center ps-4">
            <motion.p className="self-start text-lg font-bold">
              General
            </motion.p>
            <motion.p
              className="w-48"
              variants={{ rest: { opacity: 0.8 }, hover: { opacity: 1 } }}
            >
              League-wide statistics
            </motion.p>
          </div>
        </MotionLink>
        <MotionLink
          href="/teams/home"
          className="flex items-center justify-center px-6 py-4 "
          initial="rest"
          whileHover="hover"
        >
          <TeamSvg></TeamSvg>
          <div className="flex flex-col items-center justify-center ps-4">
            <p className="self-start text-lg font-bold">Teams</p>
            <motion.p
              className="w-48"
              variants={{ rest: { opacity: 0.8 }, hover: { opacity: 1 } }}
            >
              Specific team statistics
            </motion.p>
          </div>
        </MotionLink>
        <MotionLink
          href="/teams/home"
          className="flex items-center justify-center px-6 py-4 "
          initial="rest"
          whileHover="hover"
        >
          <HelmetSvg></HelmetSvg>
          <div className="flex flex-col items-center justify-center ps-4">
            <p className="self-start text-lg font-bold">Players</p>
            <motion.p
              className="w-48"
              variants={{ rest: { opacity: 0.8 }, hover: { opacity: 1 } }}
            >
              Players statistics
            </motion.p>
          </div>
        </MotionLink>
      </div>
      <div className=" h-screen bg-black"></div>
    </>
  );
}
