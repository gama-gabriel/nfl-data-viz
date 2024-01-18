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
import { useEffect } from 'react'
import { Bubble } from 'react-chartjs-2'
import { Context } from 'chartjs-plugin-datalabels'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import annotationPlugin from 'chartjs-plugin-annotation'

ChartJS.register(LinearScale, PointElement, LineElement)

const BubbleGraph = ({pre_lista}) =>
{  
    
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
        backgroundColor: `${item['primary color']}`,
        pointStyle: 'circle',
        borderColor: `${item['secondary color']}`,
        borderWidth: 1,
        })),   
    }
    
    const options = {
    
      
      responsive: true,
      maintainAspectRatio: false,
      
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
        annotation: {
          annotations: {
            line1: {
              type: 'line',
              mode: 'vertical',
              scaleID: 'x',
              value: xAverage,
              borderColor: 'grey',
              borderWidth: 1,
              drawTime: 'beforeDraw',
            },
            line2: {
              type: 'line',
              mode: 'horizontal',
              scaleID: 'y',
              value: yAverage,
              borderColor: 'grey',
              borderWidth: 1,
              drawTime: 'beforeDraw',
            },
          }
        },
        
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
  
        
        datalabels:
        {
          color: 'white',
          formatter: function(_: any, context: any) 
          {
             return context.dataset.data[context.dataIndex].name;
          },
          anchor: 'start',
          display: 'auto',
          font:
          {
            size: 10,
          }
        
        }
  
      },
    }
    useEffect (() =>
    {
      ChartJS.register(Tooltip, Legend, Title, SubTitle, ChartDataLabels, annotationPlugin)
      
    }, [])
  

    return (
        <>    
            <Bubble options={options} data={data} />  
        </>
    )
}

export default BubbleGraph