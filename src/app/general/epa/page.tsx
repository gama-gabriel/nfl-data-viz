import React, { Suspense } from "react";
import ScatterGraph from "@/app/components/ScatterGraph";
import { Skeleton } from "@/components/ui/skeleton";
import Img from "next/image";

const lista = [
  {
    data: { x: -0.07608184816683525, y: 0.08934066656895684 },
    name: "ARI",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    color: "#97233F",
  },
  {
    data: { x: -0.0757795346298359, y: -0.06300411411514557 },
    name: "ATL",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    color: "#A71930",
  },
  {
    data: { x: 0.0895406940046106, y: -0.13206726413516354 },
    name: "BAL",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    color: "#241773",
  },
  {
    data: { x: 0.10077085598219078, y: -0.05448785446694571 },
    name: "BUF",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    color: "#00338D",
  },
  {
    data: { x: -0.1499832670965615, y: 0.03774575041615967 },
    name: "CAR",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500-dark/car.png",
    color: "#0085CA",
  },
  {
    data: { x: -0.05046231682686963, y: -0.040829132802047884 },
    name: "CHI",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    color: "#0B162A",
  },
  {
    data: { x: 0.0018598052083690806, y: 0.047501304419670556 },
    name: "CIN",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    color: "#FB4F14",
  },
  {
    data: { x: -0.11741834533286731, y: -0.16619981545217413 },
    name: "CLE",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    color: "#FF3C00",
  },
  {
    data: { x: 0.11035056236917049, y: -0.07701429804191906 },
    name: "DAL",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    color: "#002244",
  },
  {
    data: { x: -0.04191878203778391, y: 0.013071558692820255 },
    name: "DEN",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    color: "#002244",
  },
  {
    data: { x: 0.05285779866584252, y: -0.010735505736906799 },
    name: "DET",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    color: "#0076B6",
  },
  {
    data: { x: 0.06467185964485093, y: 0.016969265952239205 },
    name: "GB",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    color: "#203731",
  },
  {
    data: { x: -0.03206257724982607, y: -0.03157522621488911 },
    name: "HOU",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    color: "#03202F",
  },
  {
    data: { x: -0.02564135372396998, y: -0.021232713802022112 },
    name: "IND",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    color: "#002C5F",
  },
  {
    data: { x: -0.03137572263728747, y: -0.04703111435381354 },
    name: "JAX",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    color: "#006778",
  },
  {
    data: { x: 0.029417883243220144, y: -0.06427213841202535 },
    name: "KC",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    color: "#E31837",
  },
  {
    data: { x: 0.03799597813572419, y: -0.01861334543600272 },
    name: "LA",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    color: "#003594",
  },
  {
    data: { x: -0.059599126938021676, y: 0.02708476659025931 },
    name: "LAC",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    color: "#007BC7",
  },
  {
    data: { x: -0.0997455021340698, y: -0.055307216785175264 },
    name: "LV",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    color: "#000000",
  },
  {
    data: { x: 0.09686654128694118, y: -0.03673799566630718 },
    name: "MIA",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    color: "#008E97",
  },
  {
    data: { x: -0.026237172349002188, y: -0.027879540787805607 },
    name: "MIN",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    color: "#4F2683",
  },
  {
    data: { x: -0.16880075247720877, y: -0.04284157696893784 },
    name: "NE",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    color: "#002244",
  },
  {
    data: { x: -0.02553888574739594, y: -0.07018767353107665 },
    name: "NO",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    color: "#D3BC8D",
  },
  {
    data: { x: -0.18144141697775037, y: 0.00977246906620922 },
    name: "NYG",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    color: "#0B2265",
  },
  {
    data: { x: -0.22833322031093858, y: -0.08276010233978963 },
    name: "NYJ",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    color: "#003F2D",
  },
  {
    data: { x: 0.08173429990228144, y: 0.05896116270584504 },
    name: "PHI",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    color: "#004C54",
  },
  {
    data: { x: -0.06431932993707283, y: -0.0434280414129065 },
    name: "PIT",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    color: "#000000",
  },
  {
    data: { x: 0.027570839368493173, y: 0.057819756620156815 },
    name: "SEA",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    color: "#002244",
  },
  {
    data: { x: 0.18142694637643056, y: -0.06747662927466229 },
    name: "SF",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    color: "#AA0000",
  },
  {
    data: { x: 0.015370760022012743, y: -0.005928040034026885 },
    name: "TB",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    color: "#A71930",
  },
  {
    data: { x: -0.030809542161843603, y: 0.03696409394739652 },
    name: "TEN",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    color: "#002244",
  },
  {
    data: { x: -0.07160101602698526, y: 0.07626141196386689 },
    name: "WAS",
    logo: "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    color: "#5A1414",
  },
];

export default function Home() {
  return (
    <>
      <div className="grid flex-1 grid-cols-[16rem_minmax(0,1fr)] divide-x-[1px] divide-neutral-600">
        <aside className="fixed-top-14 h-screen w-full">Texto</aside>
        <div className="flex w-full flex-col items-center">
          <div className="px-8 py-6">
            <h1 className="text-4xl font-bold">EPA</h1>
          </div>
          <div className="flex w-full flex-col items-center gap-0 ">
            
            <p className="mt-10 w-fit text-xl font-bold">
              EPA/play - 2023 season
            </p>
            <p className="my-1 w-fit">Data: nfl-verse</p>

            <Suspense
              fallback={
                <div className="aspect-video min-w-0 animate-pulse rounded-3xl bg-neutral-800/50  dark:bg-neutral-50/10 "></div>
              }
            >
              <ScatterGraph lista={lista} />
            </Suspense>
            <p className="w-fit text-sm">
              Win probability: 0-100%; Win probability (vegas): 0-100%;
              Quarters: 1-4;{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
