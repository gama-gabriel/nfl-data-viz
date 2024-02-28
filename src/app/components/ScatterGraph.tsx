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
        className={`flex w-[70%] flex-col items-center gap-2 rounded-lg px-4 pt-3 ${
          dark ? `bg-neutral-900` : `bg-white`
        }`}
      >
        <p className="w-fit text-xl font-bold">EPA/play - 2023 season</p>
        <p className="my-1 w-fit">Data: nfl-verse</p>
        <div
          className={`aspect-video ${
            dark ? `bg-neutral-900` : `bg-white`
          } mx-auto my-2 w-full `}
        >
          {loading ? (
            <div className="aspect-video min-w-0 animate-pulse rounded-3xl bg-neutral-800/50  dark:bg-neutral-50/10 "></div>
          ) : (
            <Scatter options={options} data={data} ref={chartRef} />
          )}
        </div>
      </div>
    </>
  );
};

export default ScatterGraph;
