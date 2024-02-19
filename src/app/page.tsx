"use client";
import React, { useRef, useState } from "react";
import LogoSvg from "./components/svg/LogoSvg";
import { useInView, motion } from "framer-motion";
import StatsSvg from "./components/svg/StatsSvg";
import ChartSvg from "./components/svg/ChartSvg";
import FilterSvg from "./components/svg/FilterSvg";
import { Separator } from "@/components/ui/separator";
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
        className="w-full grid grid-cols-2 py-28 px-6 bg-gradient-to-t from-transparent to-transparent xl:px-10"
        ref={ref}
        animate={
          view
            ? { background:
              "linear-gradient(to bottom, #2c0049, #090011, #000000)", transition: {duration: 5, delay: 0.5}}
            : { background:
              "linear-gradient(to bottom, #000000, #000000, #000000)", transition: {duration: 1}}
        }
      >
        <div className="flex flex-col px-12 max-h-96">
          <motion.h1 className="text-4xl xl:text-5xl text-center font-bold">
            Combining the thrill of football with the power of data
          </motion.h1>
          <h3 className="h-fit text-center text-lg xl:text-xl my-auto px-8">
            Visualize and navigate through various sets of NFL statistics, in a
            rich and immersive experience for football enthusiasts
          </h3>
          <motion.button
            className="inline-flex items-center justify-center px-6 py-3 align-bottom w-fit mx-auto rounded-sm border border-[#16ff00] bg-transparent font-bold"
            variants={{ hover: { backgroundColor: '#16ff0010' } }}
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
        <div className="pe-24 mx-auto">
          <LogoSvg />
        </div>
      </motion.div>
      <div className="pb-20">
        <h2 className="w-fit h-fit mx-auto py-20 text-4xl font-bold">
          Features
        </h2>

        <motion.div
          className="flex mx-auto px-10 w-full gap-3 h-56 justify-center 2xl:w-full divide-x-[1px] divide-neutral-500"
          ref={gridRef}
          animate={gridView ? "rest" : "hidden"}
        >
          <div className="px-4 w-[calc(30%)] ">
            <StatsSvg />
            <h2 className="font-bold text-2xl text-center p-3 ">
              NFL advanced stats simplified
            </h2>
            <p className="text-lg text-center p-3">
              In a easy way to understand, yet extremely detailed
            </p>
          </div>
          

          <div className="px-4 w-[calc(30%)]">
            <ChartSvg />
            <h2 className="font-bold text-2xl text-center p-3">
              Dynamic and interactive charts and tables
            </h2>
            <p className="text-lg text-center p-3">
              In a easy way to understand, yet extremely detailed
            </p>
          </div>

          <div className="px-4 w-[calc(30%)]">
            <FilterSvg />
            <h2 className="font-bold text-2xl text-center p-3">
              Customizable data filters
            </h2>
            <p className="text-lg text-center p-3">
              In a easy way to understand, yet extremely detailed
            </p>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col justify-center items-center py-20">
        <h2 className="text-4xl font-bold py-2">
          Getting started
        </h2>
        <h3 className="text-xl">Start with the dataset you prefer</h3>
      </div>

      <div className="flex justify-center gap-5 items-center ">
        <MotionLink
          href="/general/home"
          className="px-6 py-4 flex items-center justify-center "
          initial="rest"
          whileHover="hover"
        >
          <NflSvg></NflSvg>
          <div className="flex flex-col items-center justify-center ps-4">
            <motion.p className="font-bold text-lg self-start" >General</motion.p>
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
          className="px-6 py-4 flex items-center justify-center "
          initial="rest"
          whileHover="hover"
        >
          <TeamSvg></TeamSvg>
          <div className="flex flex-col items-center justify-center ps-4">
            <p className="font-bold text-lg self-start">Teams</p>
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
          className="px-6 py-4 flex items-center justify-center "
          initial="rest"
          whileHover="hover"
        >
          <HelmetSvg></HelmetSvg>
          <div className="flex flex-col items-center justify-center ps-4">
            <p className="font-bold text-lg self-start">Players</p>
            <motion.p
              className="w-48"  
              variants={{ rest: { opacity: 0.8 }, hover: { opacity: 1 } }}
            >
              Players statistics
            </motion.p>
          </div>
        </MotionLink>
      </div>
      <div className=" bg-black h-screen"></div>
    </>
  );
}
