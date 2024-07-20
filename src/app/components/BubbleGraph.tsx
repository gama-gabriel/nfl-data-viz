"use client";

import React from "react";

import {
  Chart as ChartJS,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
  SubTitle,
  ChartData,
  ChartOptions
} from "chart.js";
import { useEffect, useState } from "react";
import { Bubble } from "react-chartjs-2";
import { Context } from "chartjs-plugin-datalabels";
import ChartDataLabels from "chartjs-plugin-datalabels";
import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(LinearScale, PointElement, LineElement, RadialLinearScale);

const BubbleGraph = ({ pre_lista }: any) => {
  const [screenSize, setScreenSize] = useState(0.1);
  const lista = pre_lista.map((item: any) => ({
    ...item,
    data: {
      ...item.data,
      r: item.data.r * screenSize,
    },
  }));

  const getAverage = (data: Array<object>, key: string) => {
    const sum = data.reduce((acc, point: any) => acc + point[key], 0);
    return sum / data.length;
  };

  const xAverage = getAverage(
    lista.map((item: any) => item.data),
    "x"
  );
  const yAverage = getAverage(
    lista.map((item: any) => item.data),
    "y"
  );

  const data = {
    datasets: lista.map((item: any) => ({
      data: [item.data],
      label: item.name,
      backgroundColor: `${item["primary color"]}99`,
      pointStyle: "circle",
      borderColor: `${item["secondary color"]}60`,
      borderWidth: 1,
    })),
  };

  const options: (ChartOptions<'bubble'> & {annotation?: number})= {
    responsive: true,
    maintainAspectRatio: false,
    devicePixelRatio: 2,
    borderColor: "white",
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        reverse: true,
        title: {
          display: true,
          text: `Offensive EPA/play`,
          font: {
            size: 8,
          },
        },
        ticks: {
          color: "white",
          textStrokeColor: "#241773",
          font: {
            size: 8,
          },
          textStrokeWidth: 1,
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
            size: 8,
          },
        },
        ticks: {
          color: "white",
          textStrokeColor: "#241773",
          font: {
            size: 8,
          },
          textStrokeWidth: 1,
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
            borderColor: "#ffffff30",
            borderWidth: 1,
            drawTime: "beforeDraw",
          },
          line2: {
            type: "line",
            scaleID: "y",
            value: yAverage,
            borderColor: "#ffffff30",
            borderWidth: 1,
            drawTime: "beforeDraw",
          },
        },
      },

      legend: {
        display: false,
      },

      datalabels: {
        color: "#ffffff90",
        formatter: function (_: any, context: any) {
          return context.dataset.data[context.dataIndex].name;
        },
        anchor: "end",
        align: "start",
        offset: 2,
        display: "auto",
        font: {
          size: 5,
        },
      },
    },
  };
  useEffect(() => {
    ChartJS.register(
      Tooltip,
      Legend,
      Title,
      SubTitle,
      ChartDataLabels,
      annotationPlugin
    );

    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth > 1536) {
        setScreenSize(0.13);
      } else {
        if (screenWidth <= 1536 && screenWidth > 1024) {
          setScreenSize(0.08);
        } else {
          if (screenWidth <= 1024 && screenWidth > 768) {
            setScreenSize(0.05);
          } else {
            setScreenSize(0.03);
          }
        }
      }
    };

    handleResize();
  }, []);

  return (
    <>
      <Bubble options={options} data={data} />
    </>
  );
};

export default BubbleGraph;
