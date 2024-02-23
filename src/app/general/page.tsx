"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const links = [
  {
    label: "Offensive stats",
    ref: "/off",
    items: [
      { text: "Overall offense", ref: "overall" },
      { text: "Pass offense", ref: "pass" },
      { text: "Run offense", ref: "run" },
      { text: "Offensive success rate", ref: "success_rate" },
      { text: "Short yardage", ref: "short_yards" },
      { text: "Early downs", ref: "early_downs" },
      { text: "Late Downs", ref: "late_downs" },
      { text: "Motion", ref: "motion" },
      { text: "Screens", ref: "screens" },
      { text: "No huddle", ref: "no_huddle" },
      { text: "Trick plays", ref: "trick_plays" },
    ],
  },
  {
    label: "Overall stats",
    ref: "",
    items: [
      { text: "Expected points added (EPA)", ref: "epa" },
      { text: "Success rate", ref: "succ_rate" },
    ],
  },
  {
    label: "Defensive stats",
    ref: "/def",
    items: [
      { text: "Overall defense", ref: "overall" },
      { text: "Pass defense", ref: "pass" },
      { text: "Run defense", ref: "run" },
      { text: "Defensive success rate", ref: "success_rate" },
      { text: "Coverages", ref: "coverages" },
      { text: "Short yardage", ref: "short_yards" },
      { text: "Early downs", ref: "early_downs" },
      { text: "Late Downs", ref: "late_downs" },
      { text: "Motion", ref: "motion" },
      { text: "Screens", ref: "screens" },
      { text: "No huddle", ref: "no_huddle" },
    ],
  },
];

const MotionLink = motion(Link);
export default function Home() {
  return (
    <>
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center gap-2 border-b border-neutral-600 pb-3 pt-6">
        <motion.h1
          className="text-3xl font-bold"
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
        >
          General
        </motion.h1>
        <motion.h3
          className="text-lg"
          initial={{ opacity: 0, x: -15 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.3, delay: 0.1 },
          }}
        >
          League-wide statistical breakdown
        </motion.h3>
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <h2 className="p-12 text-2xl">
          Explore and visualize league-wide teams data
        </h2>
        <div className="flex w-[90%] columns-3 items-start justify-center gap-10">
          {links.map((category) => (
            <motion.ul
              key={category.label}
              className="flex w-full flex-col items-center justify-center gap-5 rounded-xl border border-neutral-700 py-4 "
              variants={{ rest: { opacity: 1, transition: { staggerChildren: 0.05, delay: 0.1 } } }}
              initial='hidden'
              animate="rest"
            >
              <h2 className="w-full border-b border-neutral-700 pb-4 text-center text-xl font-bold">
                {category.label}
              </h2>
              {category.items.map((item) => (
                <motion.li
                  key={item.text}
                  
                  variants={{ hidden: { opacity: 0 }, rest: { opacity: 1 } }}
                >
                  {item.text}
                </motion.li>
              ))}
            </motion.ul>
          ))}
        </div>
      </div>
    </>
  );
}
