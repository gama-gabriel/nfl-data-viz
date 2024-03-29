"use client";

import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
  SubTitle,
} from "chart.js";
import { useRef, useState, useEffect } from "react";
import { Scatter } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import annotationPlugin from "chartjs-plugin-annotation";
import Img from "next/image";
import { motion, useMotionValue } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const MotionImage = motion(Img);
ChartJS.register(LinearScale, PointElement, LineElement);

const ScatterGraph = ({ lista }) => {
  const chartRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(true);

  const getAverage = (data, key) => {
    const sum = data.reduce((acc, point) => acc + point[key], 0);
    return sum / data.length;
  };

  const xAverage = getAverage(
    lista.map((item) => item.data),
    "x",
  );
  const yAverage = getAverage(
    lista.map((item) => item.data),
    "y",
  );

  let data = {};

  if (typeof window !== "undefined" && typeof document !== "undefined") {
    data = {
      datasets: lista.map((item) => ({
        data: [item.data],
        label: item.name,
        backgroundColor: item.color,
        borderDash: [100, 100],
        pointStyle: (() => {
          const teamImage = new Image(35, 35);
          teamImage.src = item.logo;
          return teamImage;
        })(),
      })),
    };
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    borderColor: "white",
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        reverse: false,
        title: {
          display: true,
          text: `Offensive EPA/play`,
        },
      },

      y: {
        type: "linear",
        position: "left",
        reverse: true,
        title: {
          display: true,
          text: `Defensive EPA/play`,
          font: {
            size: "10rem",
          },
        },

        ticks: {
          color: "white",
          textStrokeColor: "#241773",
          textStrokeWidth: 1,
        },
      },
    },

    plugins: {
      annotation: {
        annotations: {
          line1: {
            type: "line",
            mode: "vertical",
            scaleID: "x",
            value: xAverage,
            borderColor: `${dark ? `#ffffff30` : `#000000`}`,
            borderWidth: 1,
            drawTime: "beforeDraw",
          },
          line2: {
            type: "line",
            mode: "horizontal",
            scaleID: "y",
            value: yAverage,
            borderColor: `${dark ? `#ffffff30` : `#000000`}`,
            borderWidth: 1,
            drawTime: "beforeDraw",
          },
        },
      },
      legend: {
        display: false,
      },
    },
  };
  useEffect(() => {
    ChartJS.register(
      LinearScale,
      PointElement,
      LineElement,
      Tooltip,
      Legend,
      annotationPlugin,
      ChartDataLabels,
    );
    ChartJS.unregister(ChartDataLabels);
    if (chartRef != null) {
      setLoading(false);
    }
  }, []);

  const container = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  const son = {
    hidden: { height: 0 },
    visible: {
      height: "auto",
      transition: {
        duration: 3,
        staggerChildren: 0.1,
      },
    },
  };
  const draw = {
    hidden: { stroke: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        stroke: 1,
        opacity: 1,
        transition: {
          stroke: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };
  const pathLength = useMotionValue(0);

  return (
    <>
      <div
        className={`flex w-full flex-col items-center rounded-lg px-4 py-4 ${
          dark ? `bg-neutral-900` : `bg-white`
        }`}
      >
        <p className="w-fit text-xl font-bold">EPA/play - 2023 season</p>
        <p className="w-fit pb-1">Data: nfl-verse</p>
        <div className={` ${dark ? `bg-neutral-900` : `bg-white`} w-full py-2`}>
          <AspectRatio ratio={2 / 1}>
            {loading ? (
              <div className="h-full w-full animate-pulse rounded-3xl bg-neutral-700"></div>
            ) : (
              <Scatter options={options} data={data} ref={chartRef} />
            )}
          </AspectRatio>
        </div>

        <p className="w-fit text-sm">
          Win probability: 0-100%; Win probability (vegas): 0-100%; Quarters:
          1-4
        </p>
      </div>
    </>
  );
};

export default ScatterGraph;
