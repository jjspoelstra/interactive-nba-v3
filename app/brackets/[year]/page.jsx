'use client'

import WestBracket from '../../components/WestBracket'
import StatsContainer from '../../components/StatsContainer';
import EastBracket from '../../components/EastBracket';
import Lotto from '../../components/Lotto';
import Header from '../../components/Header'

import { usePathname } from 'next/navigation'

import { useEffect, useState } from 'react';

import { fetchPlayoffData, fetchTeamData } from '@/app/components/fetchData';
// Define the animation variants


// Define the transition


export default function Home() {
  const pathname = usePathname()
  const pathnameYear = pathname.slice(-4)

  const [playoffData, setPlayoffData] = useState(null)

  useEffect(() => {
    fetchPlayoffData(pathnameYear)
      .then((data) => {setPlayoffData(data)});
    fetchTeamData(pathnameYear)
    .then((data) => console.log(data))
  }, []);

  console.log(playoffData)

    return (

      <>
        <Header />
      <main>
        <WestBracket />
        <StatsContainer />
        <EastBracket />
      </main>
        <Lotto/>
      </>
    );
}
