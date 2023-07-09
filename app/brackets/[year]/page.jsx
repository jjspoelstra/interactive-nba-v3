'use client'

import WestBracket from '../../components/WestBracket'
import StatsContainer from '../../components/StatsContainer';
import EastBracket from '../../components/EastBracket';
import Lotto from '../../components/Lotto';
import Header from '../../components/Header'

import { usePathname } from 'next/navigation'

import { useEffect, useState } from 'react';

import { fetchData } from '@/app/components/fetchData';
// Define the animation variants


// Define the transition


export default function Home() {
  const pathname = usePathname()
  const pathnameYear = pathname.slice(-4)

  const [data, setData] = useState({
    playoffData: null,
    westData: null,
    eastData: null,
    lottoData: null,
  });
  

  useEffect(() => {
  fetchData(pathnameYear)
    .then((data) => {
      const sortedData = {
        westData: [],
        eastData: [],
        lottoData: [],
      };
      //attempting to make this faster
      data.forEach((collection) => {
        const { collectionName, data: items } = collection;
        
        items.forEach((item) => {
          if (['9th', '10th', '11th', '12th', '13th', '14th', '15th'].includes(item.seed)) {
            sortedData.lottoData.push({ collectionName, ...item });
          } else if (item.conference === 'east') {
            sortedData.eastData.push({ collectionName, ...item });
          } else if (item.conference === 'west') {
            sortedData.westData.push({ collectionName, ...item });
          }
        });
      });
      

      setData(sortedData);
    });
}, []);

  
  console.log(data.lottoData) 

    return (
      <>
        <Header />
        <main>
          <WestBracket data={data.westData} bracket={data.playoffData}/>
          <StatsContainer />
          <EastBracket data={data.eastData} bracket={data.playoffData}/>
        </main>
        <Lotto data={data.lottoData} />
      </>
    );
   
}
