import React from "react";

const links = ~[
  { label: 'Offesnive stats', items: [{}]}
]

export default function Home() {
  return (
    <>
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center gap-2 border-b border-neutral-600 pb-3 pt-6">
        <h1 className="text-3xl font-bold ">General</h1>
        <h3 className="text-lg">League-wide statistical breakdown</h3>
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <h2 className="p-12 text-2xl">
          Explore and visualize league-wide teams data
        </h2>
        <div className="flex w-[90%] columns-3 items-start justify-center gap-10">
          <div className="flex w-full flex-col items-center justify-center gap-5 rounded-xl border border-neutral-700 py-4 ">
            <h2 className="w-full border-b border-neutral-700 text-center text-xl font-bold pb-4">
              Offensive stats
            </h2>
            <div className="">
              <p>Offensive success rate</p>
              <p>Offensive success rate</p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-5 rounded-xl border border-neutral-700 py-4 ">
            <h2 className="w-full border-b border-neutral-700 text-center text-xl font-bold pb-4">
              Overall stats
            </h2>
            <div className="">
              <p>Offensive success rate</p>
              <p>Offensive success rate</p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-5 rounded-xl border border-neutral-700 py-4 ">
            <h2 className="w-full border-b border-neutral-700 text-center text-xl font-bold pb-4">
              Defensive stats
            </h2>
            <div className="">
              <p>Offensive success rate</p>
              <p>Offensive success rate</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
