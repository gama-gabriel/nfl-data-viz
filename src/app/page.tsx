"use client";
import React, { useRef, useState } from "react";
import LogoSvg from "./components/svg/LogoSvg";
import { useInView, motion } from "framer-motion";
import StatsSvg from "./components/svg/StatsSvg";
import ChartSvg from "./components/svg/ChartSvg";
import FilterSvg from "./components/svg/FilterSvg";
import { Separator } from "@/components/ui/separator";

export default function Menu() {
  const [hovering, setHovering] = useState();
  const ref = useRef<HTMLDivElement>(null);
  const view = useInView(ref, { margin: "-10% 0px -10% 0px" });

  const Svg = motion(LogoSvg);

  return (
    <>
      <motion.div
        className="w-[90%] mx-auto my-10 grid  grid-cols-2 py-10 ps-10 rounded-3xl"
        ref={ref}
        animate={
          view
            ? { backgroundColor: "#17171780", transition: { duration: 0.5 } }
            : { backgroundColor: "#17171700", transition: { duration: 1 } }
        }
      >
        <div className=" flex flex-col items-center ">
          <motion.h1 className="text-4xl font-bold">
            Combining the thrill of football with the power of data
          </motion.h1>
          <h3 className="h-fit my-auto text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam,
            inventore. Sit maiores aliquid temporibus magni, laudantium omnis
            hic, placeat eveniet reiciendis aliquam necessitatibus porro
            doloremque, ut tempora laborum doloribus sequi.
          </h3>
        </div>
        <div className="items-center px-6 mx-auto">
          <LogoSvg view={view}></LogoSvg>
        </div>  
      </motion.div>

      <div className="flex mx-auto px-10 py-16 w-full gap-3 h-56 justify-center 2xl:w-full">
        <div className="px-4 w-[calc(30%)] ">
          <StatsSvg />
          <h2 className="font-bold text-2xl text-center p-3 ">
            NFL advanced stats simplified
          </h2>
          <p className="text-lg text-center p-3">
          In a easy way to understand, yet extremely detailed
          </p> 
        </div>
        <Separator orientation='vertical' className='h-56'/>

        <div className="px-4 w-[calc(30%)]">
          <ChartSvg />
          <h2 className="font-bold text-2xl text-center p-3">
          Dynamic and interactive charts and tables
          </h2>
          <p className="text-lg text-center p-3">
          In a easy way to understand, yet extremely detailed
          </p> 
        </div>
        <Separator orientation='vertical' className='h-56'/>

        <div className="px-4 w-[calc(30%)]">
          <FilterSvg />
          <h2 className="font-bold text-2xl text-center p-3">
          Customizable data filters
          </h2>
          <p className="text-lg text-center p-3">
          In a easy way to understand, yet extremely detailed
          </p> 
        </div>
      </div>

      <div className=" bg-black h-screen">Texto</div>
    </>
  );
}
