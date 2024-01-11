
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

import 'chartjs-plugin-datalabels'
import annotationPlugin from 'chartjs-plugin-annotation'
import logo from '../../../public/logo.svg'
import Img from 'next/image'

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend, annotationPlugin, Title, SubTitle)

const isServer = typeof window === 'undefined';

let imagem = null;

const lista =[{"data": {"x": 0.05794554576277733, "y": 0.47344110854503463}, "name": "ARI", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png", "color": "#97233F"}, {"data": {"x": -0.0599091537296772, "y": 0.4002361275088548}, "name": "ATL", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png", "color": "#A71930"}, {"data": {"x": -0.12294978648424149, "y": 0.4013605442176871}, "name": "BAL", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png", "color": "#241773"}, {"data": {"x": -0.032549407333135605, "y": 0.4378769601930036}, "name": "BUF", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png", "color": "#00338D"}, {"data": {"x": 0.030883191153407097, "y": 0.44801026957637996}, "name": "CAR", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500-dark/car.png", "color": "#0085CA"}, {"data": {"x": -0.004777115304023027, "y": 0.4275184275184275}, "name": "CHI", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png", "color": "#0B162A"}, {"data": {"x": 0.028147095814347267, "y": 0.4678362573099415}, "name": "CIN", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png", "color": "#FB4F14"}, {"data": {"x": -0.15089619159698486, "y": 0.36147757255936674}, "name": "CLE", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png", "color": "#FF3C00"}, {"data": {"x": -0.113508440554142, "y": 0.43226600985221675}, "name": "DAL", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png", "color": "#002244"}, {"data": {"x": 0.010059564374387264, "y": 0.45265588914549654}, "name": "DEN", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png", "color": "#002244"}, {"data": {"x": -0.00937382411211729, "y": 0.43893591293833134}, "name": "DET", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png", "color": "#0076B6"}, {"data": {"x": -0.00031480600591748953, "y": 0.44902634593356244}, "name": "GB", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png", "color": "#203731"}, {"data": {"x": -0.008903739042580128, "y": 0.4302191464821223}, "name": "HOU", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png", "color": "#03202F"}, {"data": {"x": -0.020346760749816895, "y": 0.44370860927152317}, "name": "IND", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png", "color": "#002C5F"}, {"data": {"x": -0.03993872553110123, "y": 0.4219858156028369}, "name": "JAX", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png", "color": "#006778"}, {"data": {"x": -0.04602309316396713, "y": 0.40443896424167697}, "name": "KC", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png", "color": "#E31837"}, {"data": {"x": 0.00047695927787572145, "y": 0.42956926658905703}, "name": "LA", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png", "color": "#003594"}, {"data": {"x": 0.030572490766644478, "y": 0.45435466946484787}, "name": "LAC", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png", "color": "#007BC7"}, {"data": {"x": -0.053955767303705215, "y": 0.4387865655471289}, "name": "LV", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png", "color": "#000000"}, {"data": {"x": -0.05426272377371788, "y": 0.43217286914765907}, "name": "MIA", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png", "color": "#008E97"}, {"data": {"x": -0.08627218753099442, "y": 0.40789473684210525}, "name": "MIN", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png", "color": "#4F2683"}, {"data": {"x": -0.036991361528635025, "y": 0.41391509433962265}, "name": "NE", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png", "color": "#002244"}, {"data": {"x": -0.07300002872943878, "y": 0.40189125295508277}, "name": "NO", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png", "color": "#D3BC8D"}, {"data": {"x": -0.00530737591907382, "y": 0.4497663551401869}, "name": "NYG", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png", "color": "#0B2265"}, {"data": {"x": -0.09244506061077118, "y": 0.3877551020408163}, "name": "NYJ", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png", "color": "#003F2D"}, {"data": {"x": 0.04321997985243797, "y": 0.4431946006749156}, "name": "PHI", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png", "color": "#004C54"}, {"data": {"x": -0.05302459001541138, "y": 0.41002277904328016}, "name": "PIT", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png", "color": "#000000"}, {"data": {"x": 0.03123951517045498, "y": 0.44518272425249167}, "name": "SEA", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png", "color": "#002244"}, {"data": {"x": -0.08195976912975311, "y": 0.41686746987951806}, "name": "SF", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png", "color": "#AA0000"}, {"data": {"x": -0.004760876297950745, "y": 0.45109321058688145}, "name": "TB", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png", "color": "#A71930"}, {"data": {"x": 0.04126306250691414, "y": 0.44022988505747124}, "name": "TEN", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png", "color": "#002244"}, {"data": {"x": 0.09878019243478775, "y": 0.42924528301886794}, "name": "WAS", "logo": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png", "color": "#5A1414"}]

if (!isServer)
{
  imagem = new Image(50, 50)
  imagem.src = 'https://a1.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/bal.png&h=25&w=25'
}
function Home() {
   
  const chartRef = useRef(null)
  const [loading, setLoading] = useState(true)


  const dummyData = Array.from({ length: 20 }, (_, index) => ({
    x: Math.random() * 100 - 50,
    y: Math.random() * 100 - 50,
  }));
  
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
      backgroundColor: item.color,
      pointStyle: (() => 
      {
        const teamImage = new Image(50, 50);
        teamImage.src = item.logo;
        return teamImage;
      })()
    })),   
  };
  
  const options = {
    
    
    responsive: true,
    aspectRatio: 2,
    
    borderColor: 'white',
    scales: 
    {
      x: 
      {
        type: 'linear',
        position: 'bottom',
        reverse: true,
        min: -0.16,
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
    if (chartRef != null)
    {
      setLoading(false)
      console.log(lista.name)
    }
  }, [])
  
  return (
    <>
    <div className='mx-auto w-full py-4 ps-14 border-b'>
        <Img src={logo} width={100} height={100} alt={'NFL data viz logo'} className=''></Img>
    </div>
    <div className='border border-white p-4 min-w-fit max-w-5xl mx-auto my-12 bg-white' >
      
      {
      loading ? <p>Loading</p> :
      <Scatter options={options} data={data} ref={chartRef} />
      }
    </div>
    </>
  );
}

export default Home;
