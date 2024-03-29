'use client'
import React, { Suspense } from 'react'
import BubbleGraph from '../../components/BubbleGraph';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import Link  from 'next/link'
import { Skeleton } from "@/components/ui/skeleton"

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none bg-neutral-900 no-underline outline-none transition-colors hover:bg-zinc-300 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const isServer = typeof window === 'undefined';

let imagem = null;

const pre_lista = [{"data": {"x": 0.2050420898084106, "y": 0.546875, "r": 64.0, "name": "ARI"}, "primary color": "#97233F", "secondary color": "#000000"}, {"data": {"x": 0.10380836089616306, "y": 0.49382716049382713, "r": 81.0, "name": "ATL"}, "primary color": "#A71930", "secondary color": "#000000"}, {"data": {"x": 0.06425374676567597, "y": 0.49612403100775193, "r": 129.0, "name": "BAL"}, "primary color": "#241773", "secondary color": "#9E7C0C"}, {"data": {"x": -0.14670681820191542, "y": 0.4157303370786517, "r": 89.0, "name": "BUF"}, "primary color": "#00338D", "secondary color": "#C60C30"}, {"data": {"x": 0.012185102123737957, "y": 0.5166666666666667, "r": 60.0, "name": "CAR"}, "primary color": "#0085CA", "secondary color": "#000000"}, {"data": {"x": -0.13146197269022444, "y": 0.42045454545454547, "r": 88.0, "name": "CHI"}, "primary color": "#0B162A", "secondary color": "#E64100"}, {"data": {"x": -0.019224774130864195, "y": 0.46601941747572817, "r": 103.0, "name": "CIN"}, "primary color": "#FB4F14", "secondary color": "#000000"}, {"data": {"x": -0.13720155750098656, "y": 0.4266666666666667, "r": 75.0, "name": "CLE"}, "primary color": "#FF3C00", "secondary color": "#311D00"}, {"data": {"x": -0.2327981904726095, "y": 0.38461538461538464, "r": 104.0, "name": "DAL"}, "primary color": "#002244", "secondary color": "#B0B7BC"}, {"data": {"x": -0.06893810545381399, "y": 0.41025641025641024, "r": 78.0, "name": "DEN"}, "primary color": "#002244", "secondary color": "#FB4F14"}, {"data": {"x": 0.15143966214165575, "y": 0.4824561403508772, "r": 114.0, "name": "DET"}, "primary color": "#0076B6", "secondary color": "#B0B7BC"}, {"data": {"x": 0.15579823733024956, "y": 0.4782608695652174, "r": 92.0, "name": "GB"}, "primary color": "#203731", "secondary color": "#FFB612"}, {"data": {"x": 0.10750510960521721, "y": 0.5168539325842697, "r": 89.0, "name": "HOU"}, "primary color": "#03202F", "secondary color": "#A71930"}, {"data": {"x": -0.10620538725132292, "y": 0.45217391304347826, "r": 115.0, "name": "IND"}, "primary color": "#002C5F", "secondary color": "#a5acaf"}, {"data": {"x": 0.1672393349287944, "y": 0.504424778761062, "r": 113.0, "name": "JAX"}, "primary color": "#006778", "secondary color": "#000000"}, {"data": {"x": -0.0006550009586914841, "y": 0.47619047619047616, "r": 84.0, "name": "KC"}, "primary color": "#E31837", "secondary color": "#FFB612"}, {"data": {"x": -0.14331618476014502, "y": 0.36036036036036034, "r": 111.0, "name": "LA"}, "primary color": "#003594", "secondary color": "#FFD100"}, {"data": {"x": -0.07096404586598509, "y": 0.47, "r": 100.0, "name": "LAC"}, "primary color": "#007BC7", "secondary color": "#ffc20e"}, {"data": {"x": -0.31034141130310117, "y": 0.3188405797101449, "r": 69.0, "name": "LV"}, "primary color": "#000000", "secondary color": "#A5ACAF"}, {"data": {"x": 0.03104590005219265, "y": 0.5067567567567568, "r": 148.0, "name": "MIA"}, "primary color": "#008E97", "secondary color": "#F58220"}, {"data": {"x": -0.016036465117684674, "y": 0.43564356435643564, "r": 101.0, "name": "MIN"}, "primary color": "#4F2683", "secondary color": "#FFC62F"}, {"data": {"x": 0.1020660827243729, "y": 0.5571428571428572, "r": 70.0, "name": "NE"}, "primary color": "#002244", "secondary color": "#C60C30"}, {"data": {"x": 0.14796573064550997, "y": 0.4657534246575342, "r": 73.0, "name": "NO"}, "primary color": "#D3BC8D", "secondary color": "#000000"}, {"data": {"x": -0.026445174455423392, "y": 0.46153846153846156, "r": 65.0, "name": "NYG"}, "primary color": "#0B2265", "secondary color": "#A71930"}, {"data": {"x": -0.20013727098333403, "y": 0.3783783783783784, "r": 74.0, "name": "NYJ"}, "primary color": "#003F2D", "secondary color": "#000000"}, {"data": {"x": 0.11478776193486144, "y": 0.5168539325842697, "r": 89.0, "name": "PHI"}, "primary color": "#004C54", "secondary color": "#A5ACAF"}, {"data": {"x": -0.10208364104957239, "y": 0.40540540540540543, "r": 74.0, "name": "PIT"}, "primary color": "#000000", "secondary color": "#FFB612"}, {"data": {"x": 0.10016748852701934, "y": 0.4318181818181818, "r": 88.0, "name": "SEA"}, "primary color": "#002244", "secondary color": "#69be28"}, {"data": {"x": -0.13408247135095105, "y": 0.47619047619047616, "r": 126.0, "name": "SF"}, "primary color": "#AA0000", "secondary color": "#B3995D"}, {"data": {"x": 0.18461607885118403, "y": 0.5772357723577236, "r": 123.0, "name": "TB"}, "primary color": "#A71930", "secondary color": "#322F2B"}, {"data": {"x": 0.09156688724454541, "y": 0.5368421052631579, "r": 95.0, "name": "TEN"}, "primary color": "#002244", "secondary color": "#4B92DB"}, {"data": {"x": 0.10646320521546217, "y": 0.4507042253521127, "r": 142.0, "name": "WAS"}, "primary color": "#5A1414", "secondary color": "#FFB612"}]
const lista = pre_lista.map(item => ({
  ...item,
  data: {
    ...item.data,
    r: (item.data.r / 100) * 50 
  }
}))


if (!isServer)
{
  imagem = new Image(50, 50)
  imagem.src = 'https://a1.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/bal.png&h=25&w=25'
}
function Home() {
   
  
  
  
  const getAverage = (data, key) => {
    const sum = data.reduce((acc, point) => acc + point[key], 0)
    return sum / data.length
  };
  
  // const xAverage = getAverage(lista.map(item => item.data), 'x')
  // const yAverage = getAverage(lista.map(item => item.data), 'y')
  
  
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
  };

  return (
    
    <>
      <div className='py-4 px-1 aspect-video md:w-[70%] z-10 bg-black w-full mx-auto  my-12 min-w-0' >
      {/* <Suspense fallback={<div className='aspect-video md:w-[70%] w-full mx-auto animate-pulse rounded-3xl bg-red-800/50 my-12 min-w-0 -z-10'/>}>*/}
          <BubbleGraph pre_lista={pre_lista}/> 
        {/* </Suspense> */}
          
      </div>
      <div className='aspect-video md:w-[70%] w-full mx-auto animate-pulse rounded-3xl bg-neutral-800/50 dark:bg-neutral-50/10 my-12 min-w-0 -z-10'>
      </div>
          
      <div className='animate-pulse bg-red-900 h-screen'></div>
    </>
    
  );
}

export default Home;
