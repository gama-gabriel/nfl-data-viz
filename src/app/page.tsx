"use client";
import React, { useRef, useState } from "react";
import LogoSvg from "./components/svg/LogoSvg";
import { useInView, motion } from "framer-motion";
import StatsSvg from "./components/svg/StatsSvg";
import ChartSvg from "./components/svg/ChartSvg";
import FilterSvg from "./components/svg/FilterSvg";
import { Separator } from "@/components/ui/separator";
import { ArrowRightIcon } from "@radix-ui/react-icons";
export default function Menu() {
  const ref = useRef<HTMLDivElement>(null);
  const view = useInView(ref, { margin: "-60% 0px -50% 0px" });

  const gridRef = useRef<HTMLDivElement>(null);
  const gridView = useInView(gridRef, { margin: "-40% 0px -40% 0px" });

  const MotionArrow = motion(ArrowRightIcon);

  return (
    <>
      <motion.div
        className="w-full grid grid-cols-2 py-28 px-6 xl:px-10"
        ref={ref}
        animate={
          view
            ? { backgroundColor: "#090011", transition: { duration: 0.5 } }
            : { backgroundColor: "#09001100", transition: { duration: 1 } }
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
          <motion.button className="inline-flex items-center justify-center px-6 py-3 align-bottom w-fit mx-auto rounded-sm border border-[#16ff00] bg-transparent font-bold" variants={{hover: { scale: 1.1}}} whileHover='hover'>
            Get started <MotionArrow color="#16ff00" className="relative ms-2 opacity-70" variants={{hover: {x: 10, opacity: 1}}}/>
          </motion.button>
        </div>
        <div className="pe-24 mx-auto">
          <LogoSvg/>
        </div>
      </motion.div>

      <h2 className='w-fit h-fit mx-auto py-20 text-4xl font-bold' ref={gridRef}>Features</h2>

      <motion.div className="flex mx-auto px-10 w-full gap-3 h-56 justify-center 2xl:w-full"  animate={ gridView ? 'rest' : 'hidden'}>
        <div className="px-4 w-[calc(30%)] ">
          <StatsSvg />
          <h2 className="font-bold text-2xl text-center p-3 ">
            NFL advanced stats simplified
          </h2>
          <p className="text-lg text-center p-3">
            In a easy way to understand, yet extremely detailed
          </p>
        </div>
        <Separator orientation="vertical" className="h-56" />

        <div className="px-4 w-[calc(30%)]">
          <ChartSvg />
          <h2 className="font-bold text-2xl text-center p-3">
            Dynamic and interactive charts and tables
          </h2>
          <p className="text-lg text-center p-3">
            In a easy way to understand, yet extremely detailed
          </p>
        </div>
        <Separator orientation="vertical" className="h-56" />

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

      <div className=" bg-black h-screen">Texto</div>
    </>
  );
}
