'use client'

import React from 'react'
import 
{
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
  SubTitle,
} from 'chart.js'
import { useRef, useState, useEffect } from 'react'
import { Scatter } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import annotationPlugin from 'chartjs-plugin-annotation'



const ScatterGraph = ({lista}) =>
{
    const chartRef = useRef(null)
    const [loading, setLoading] = useState(true)

    
      
      const getAverage = (data, key) => {
        const sum = data.reduce((acc, point) => acc + point[key], 0)
        return sum / data.length
      };
      
      const xAverage = getAverage(lista.map(item => item.data), 'x')
      const yAverage = getAverage(lista.map(item => item.data), 'y')
      
      
      let data = {};

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  data = {
    datasets: lista.map(item => ({
      data: [item.data],
      label: item.name,
      backgroundColor: item.color,
      borderDash: [100, 100],
      pointStyle: (() => {
        const teamImage = new Image(45, 45);
        teamImage.src = item.logo;
        return teamImage;
      })()
    })),
  };
}

    const options = {
    
    
        responsive: true,
        aspectRatio: 1.6,
        
        borderColor: 'white',
        scales: 
        {
          x: 
          {
            type: 'linear',
            position: 'bottom',
            reverse: true,
            title: 
            {
              display: true,
              text: `Offensive EPA/play`,
            },
          },
    
          y: 
          {
            type: 'linear',
            position: 'left',
            reverse: true,
            title: 
            {
              display: true,
              text: `Defensive EPA/play`,
            },
    
            ticks:
            {
              color: 'white',
              textStrokeColor: '#241773',
              textStrokeWidth: 1,
            },
          },
        },
    
        plugins: 
        {
          legend:
          {
            display: false,
          },
    
          subtitle:
          {
            display: true,
            text: ['Weeks 1 - 13', `data: nflfastr`],
            padding: 
            {
              bottom: 10,
            },
            font:
            {
              size: 16
            },
          },
    
          title:
          {
            display: true,
            text: 'EPA/play - 2023',
            color: 'white',
            font:
            {
              size: 24,
            }
          },
    
    
        },
      }
      useEffect (() =>
      {
        ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend, annotationPlugin, Title, SubTitle, ChartDataLabels)
        ChartJS.unregister(ChartDataLabels)
        if (chartRef != null)
        {
          setLoading(false)
        }
      }, [])

    return (
        <>
        {
            loading ? <p className='text-white'>Loading</p> :
            <Scatter options={options} data={data} ref={chartRef} />
            }
        </>
    )
}

export default ScatterGraph