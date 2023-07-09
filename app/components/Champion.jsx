import { usePathname } from 'next/navigation'
import TeamLogo from './TeamLogo';

export default function Champion({bracket}){
  if (bracket === null) {
    // Render a loading indicator or placeholder
    return <div></div>;
  }
  
  const pathname = usePathname()
  const pathnameYear = pathname.slice(-4)


  const finalsMatchup = bracket.data.find(item => item.round === 'Finals')
  let finalsWinner
  finalsMatchup.team1Wins === '4' ? finalsWinner = finalsMatchup.team1 : finalsWinner = finalsMatchup.team2

    return (
        <section className="champion">
            <TeamLogo className='finalsChampion' alt={finalsWinner} src={finalsWinner} year={pathnameYear}/>
        </section>
    )
}

