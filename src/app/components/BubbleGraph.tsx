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
import { Bubble } from 'react-chartjs-2'
import { Context } from 'chartjs-plugin-datalabels'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import annotationPlugin from 'chartjs-plugin-annotation'



const BubbleGraph = ({pre_lista}) =>
{
    const chartRef = useRef(null)
    const [loading, setLoading] = useState(true)

    const lista = pre_lista.map(item => ({
        ...item,
        data: {
          ...item.data,
          r: (item.data.r / 100) * 8 
        }
      }))
      
      const getAverage = (data, key) => {
        const sum = data.reduce((acc, point) => acc + point[key], 0)
        return sum / data.length
      };
      
      const xAverage = getAverage(lista.map(item => item.data), 'x')
      const yAverage = getAverage(lista.map(item => item.data), 'y')
           
    const data = 
    {
        datasets: lista.map(item => (
        {
        data: [item.data],
        label: item.name,
        backgroundColor: `${item['primary color']}99`,
        pointStyle: 'circle',
        borderColor: `${item['secondary color']}60`,
        borderWidth: 1,
        })),   
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
          text: 'Quarterbacks on Play Action',
          color: 'white',
          font:
          {
            size: 24,
          }
        },
  
        annotation: {
          annotations: [
            {
              type: 'line',
              mode: 'vertical',
              scaleID: 'x',
              value: xAverage,
              borderColor: 'grey',
              borderWidth: 2,
              
            },
            {
              type: 'line',
              mode: 'horizontal',
              scaleID: 'y',
              value: yAverage,
              borderColor: 'grey',
              borderWidth: 2,
            },
          ],
        },
        
  
      },
    }
      useEffect (() =>
      {
        ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend, annotationPlugin, Title, SubTitle, ChartDataLabels)
        if (chartRef != null)
        {
          setLoading(false)
          console.log(lista.name)
        }
      }, [])

    return (
        <>
        {
            loading ? <p className='text-white'>Loading</p> :
            <Bubble options={options} data={data} ref={chartRef} />
            }
        </>
    )
}

export default BubbleGraph