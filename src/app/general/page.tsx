import React from "react";

export default function Home() {
  return (
    <>
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center gap-1 border-b border-neutral-600 pb-3 pt-6">
        <h1 className="text-4xl font-bold ">General</h1>
        <h3 className="text-lg">League-wide statistical breakdown</h3>
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <h2 className="p-8 text-3xl">
          Explore and visualize league-wide teams data
        </h2>
        <div className="flex w-[90%] columns-3 items-center justify-center bg-red-50">
          <div className="h-36 w-full bg-red-900">Texto</div>
          <div className="h-36 w-full bg-red-900">Texto</div>
          <div className="h-36 w-full bg-red-600">Texto</div>
        </div>
      </div>
    </>
  );
}
