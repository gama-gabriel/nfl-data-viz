"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { Suspense } from "react";
import ScatterGraph from "@/app/components/ScatterGraph";

import { columns } from "./columns";
import { DataTable } from "./data-table";
import mockData from "@/data/NFL_SUCC.json";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";

const lista = [
  {
    data: { x: 0.14416468511667213, y: 0.8333333333333334 },
    name: "ARI",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    color: "#97233F",
  },
  {
    data: { x: -0.013142925418907736, y: 0.7684210526315789 },
    name: "ATL",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    color: "#A71930",
  },
  {
    data: { x: -0.08120778560805907, y: 0.7692307692307693 },
    name: "BAL",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    color: "#241773",
  },
  {
    data: { x: 0.05855336294940199, y: 0.8035714285714286 },
    name: "BUF",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    color: "#00338D",
  },
  {
    data: { x: 0.0677737010390071, y: 0.7962962962962963 },
    name: "CAR",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500-dark/car.png",
    color: "#0085CA",
  },
  {
    data: { x: 0.237460204985442, y: 0.826530612244898 },
    name: "CHI",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    color: "#0B162A",
  },
  {
    data: { x: -0.05092547243680237, y: 0.743801652892562 },
    name: "CIN",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    color: "#FB4F14",
  },
  {
    data: { x: -0.1843635865276941, y: 0.6702127659574468 },
    name: "CLE",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    color: "#FF3C00",
  },
  {
    data: { x: -0.0004335475654345599, y: 0.7482014388489209 },
    name: "DAL",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    color: "#002244",
  },
  {
    data: { x: 0.04271950891070249, y: 0.7622950819672131 },
    name: "DEN",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    color: "#002244",
  },
  {
    data: { x: 0.11631734866743677, y: 0.7961165048543689 },
    name: "DET",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    color: "#0076B6",
  },
  {
    data: { x: 0.07236934371656377, y: 0.7741935483870968 },
    name: "GB",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    color: "#203731",
  },
  {
    data: { x: 0.08752896800004117, y: 0.7946428571428571 },
    name: "HOU",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    color: "#03202F",
  },
  {
    data: { x: 0.029576694602522307, y: 0.7835820895522388 },
    name: "IND",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    color: "#002C5F",
  },
  {
    data: { x: 0.21701511755077818, y: 0.7846153846153846 },
    name: "JAX",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    color: "#006778",
  },
  {
    data: { x: -0.0396794071056852, y: 0.7446808510638298 },
    name: "KC",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    color: "#E31837",
  },
  {
    data: { x: 0.12792214054166298, y: 0.7454545454545455 },
    name: "LA",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    color: "#003594",
  },
  {
    data: { x: -0.06941433241740715, y: 0.7734375 },
    name: "LAC",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    color: "#007BC7",
  },
  {
    data: { x: 0.1860842933177397, y: 0.8347826086956521 },
    name: "LV",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    color: "#000000",
  },
  {
    data: { x: 0.05864378968425601, y: 0.7627118644067796 },
    name: "MIA",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    color: "#008E97",
  },
  {
    data: { x: 0.13079793845188625, y: 0.8064516129032258 },
    name: "MIN",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    color: "#4F2683",
  },
  {
    data: { x: -0.016743120432161748, y: 0.7192982456140351 },
    name: "NE",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    color: "#002244",
  },
  {
    data: { x: -0.33594862585113255, y: 0.6363636363636364 },
    name: "NO",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    color: "#D3BC8D",
  },
  {
    data: { x: 0.06476787532808624, y: 0.803921568627451 },
    name: "NYG",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    color: "#0B2265",
  },
  {
    data: { x: 0.10462193746393976, y: 0.7448979591836735 },
    name: "NYJ",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    color: "#003F2D",
  },
  {
    data: { x: 0.395297836319395, y: 0.8559322033898306 },
    name: "PHI",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    color: "#004C54",
  },
  {
    data: { x: 0.1937711443881349, y: 0.7777777777777778 },
    name: "PIT",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    color: "#000000",
  },
  {
    data: { x: 0.18588437016053835, y: 0.8198198198198198 },
    name: "SEA",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    color: "#002244",
  },
  {
    data: { x: 0.06796779501709539, y: 0.8333333333333334 },
    name: "SF",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    color: "#AA0000",
  },
  {
    data: { x: -0.157439081692909, y: 0.8017241379310345 },
    name: "TB",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    color: "#A71930",
  },
  {
    data: { x: 0.0653576313874778, y: 0.7555555555555555 },
    name: "TEN",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    color: "#002244",
  },
  {
    data: { x: 0.01047914359671062, y: 0.7642276422764228 },
    name: "WAS",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    color: "#5A1414",
  },
];

export default function Home() {
  return (
    <>
      <div className="grid flex-1 grid-cols-[minmax(0,1fr)_13rem] xl:grid-cols-[minmax(0,1fr)_13rem]">
        {/* <div className="hidden w-full xl:flex">
          <Sidebar />
        </div> */}
        <div className="flex w-full flex-col items-start px-20 py-8">
          <div className="">
            <h1 className="text-3xl font-bold">Expected points added (EPA)</h1>
          </div>
          <div
            className="flex w-full scroll-m-20 flex-col items-start gap-6 pb-6 pt-12"
            id="scatter-plot"
          >
            <h2 className="text-2xl font-bold">
              <span className="pe-4">#</span>EPA/play scatter plot
            </h2>
            <Suspense
              fallback={
                <div className="aspect-video min-w-0 animate-pulse rounded-3xl bg-neutral-800/50  dark:bg-neutral-50/10 "></div>
              }
            >
              <ScatterGraph lista={lista} />
            </Suspense>
          </div>
          <div
            className="flex w-full scroll-m-20 flex-col items-start gap-6 py-6"
            id="table"
          >
            <h2 className="text-2xl font-bold">EPA table</h2>
            <ScrollArea className="h-96 w-full">
              <DataTable columns={columns} data={mockData} />
              <ScrollBar orientation="horizontal"></ScrollBar>
            </ScrollArea>
          </div>

          <div
            className="flex w-full flex-col items-start gap-6 py-6"
            id="glossary"
          >
            <h2 className="scroll-m-20 text-2xl font-bold">Glossary</h2>
            <h3 className="font-bold">EPA</h3>
            <p className="">
              Expected Points Added (EPA) represents the difference in expected
              points relative to the team's previous play. It utilizes the
              expected points model to account for factors such as down and
              distance, field position, and the clock, offering valuable context
              for quantifying team performance. For further understanding of the
              EPA model, including examples, applications, and a more detailed
              explanation, you can refer to{" "}
              <Link
                href="https://www.nfeloapp.com/analysis/expected-points-added-epa-nfl/"
                target="blank"
                className="text-blue-900 underline dark:text-blue-300"
              >
                this article
              </Link>
              .
            </p>
          </div>
        </div>
        
      </div>
    </>
  );
}
