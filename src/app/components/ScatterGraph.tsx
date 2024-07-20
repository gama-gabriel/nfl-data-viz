"use client";

import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData
} from "chart.js";
import { useRef, useState, useEffect } from "react";
import { Scatter } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import annotationPlugin from "chartjs-plugin-annotation";
import { AspectRatio } from "@/components/ui/aspect-ratio";

ChartJS.register(LinearScale, PointElement, LineElement);

const ScatterGraph = ({ lista }: {lista: any}) => {
  const chartRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(false);

  const getAverage = (data: any, key: any) => {
    const sum = data.reduce((acc: any, point: any) => acc + point[key], 0);
    return sum / data.length;
  };

  const xAverage = getAverage(
    lista.map((item: any) => item.data),
    "x",
  );
  const yAverage = getAverage(
    lista.map((item: any) => item.data),
    "y",
  );

  let data!: ChartData<"scatter"> ;

  if (typeof window !== "undefined" && typeof document !== "undefined") {
    data = {
      datasets: lista.map((item: any) => ({
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

  const options: ChartOptions<'scatter'> = {
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
        ticks: {
          color: dark ? "#ffffff" : "#000000",
        },
        grid: {
          color: dark ? "#222222" : "#dddddd",
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
            size: 10,
          },
        },
        ticks: {
          color: dark ? "#ffffff" : "#000000",
        },
        grid: {
          color: dark ? "#222222" : "#dddddd",
        },
      },
    },

    plugins: {
      annotation: {
        annotations: {
          line1: {
            type: "line",
            scaleID: "x",
            value: xAverage,
            borderColor: dark ? "#aaaaaa" : "#666666",
            borderWidth: 1,
            drawTime: "beforeDatasetsDraw",
          },
          line2: {
            type: "line",
            scaleID: "y",
            value: yAverage,
            borderColor: dark ? "#aaaaaa" : "#666666",
            borderWidth: 1,
            drawTime: "beforeDatasetsDraw",
          },
        },
      },
      legend: {
        display: false,
      },
    },
  };
  useEffect(() => {
    //avoiding conflicts with other charts that require different plugins
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
    //seting dark mode variable for chart config colors
    const checkDarkMode = () => {
      // Check if the html tag contains the dark class
      const htmlHasDarkClass =
        document.documentElement.classList.contains("dark");
      // Update the state based on whether the dark class is present or not
      setDark(htmlHasDarkClass);
    };

    // Call the function once to initialize the state
    checkDarkMode();

    // Listen for changes to the class and re-run the checkDarkMode function
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Clean up the observer
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="flex w-full flex-col items-center rounded-lg border border-neutral-300 bg-white px-4 py-4 dark:border-none dark:bg-neutral-900">
        <p className="w-fit text-xl font-bold">EPA/play - 2023 season</p>
        <p className="w-fit pb-1">Data: nfl-verse</p>
        <div className="w-full py-2">
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
