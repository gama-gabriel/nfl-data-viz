import React from "react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col pt-6 pb-3 w-[90%] justify-center items-center gap-1 border-b border-neutral-600 mx-auto">
        <h1 className="text-3xl font-bold ">General</h1>
        <h3 className="text-lg">League-wide statistical breakdown</h3>
      </div>
      <div className="flex items-center justify-center">
        <h2 className="p-6 text-xl">
          Explore and visualize league-wide teams data
        </h2>
        <div className="flex flex-col w-1/3 items-center justify-center"></div>
      </div>
    </>
  );
}
