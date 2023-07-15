import { usePathname } from 'next/navigation'
import TeamLogo from './TeamLogo';
import Series from './Series';

export default function Champion({bracket}){
  
  if (bracket === null) {
    // Render a loading indicator or placeholder
    return <div></div>;
  }
  
  const pathname = usePathname()
  const pathnameYear = pathname.slice(-4)

  const westFinalsMatchup = bracket.data.find(item => item.round === 'Western Conference Finals')
  let westFinalsWinner
  westFinalsMatchup.team1Wins > westFinalsMatchup.team2Wins ? westFinalsWinner = westFinalsMatchup.team1 : westFinalsWinner = westFinalsMatchup.team2
  
  const eastFinalsMatchup = bracket.data.find(item => item.round === 'Eastern Conference Finals')
  let eastFinalsWinner
  eastFinalsMatchup.team1Wins > eastFinalsMatchup.team2Wins ? eastFinalsWinner = eastFinalsMatchup.team1 : eastFinalsWinner = eastFinalsMatchup.team2


  const finalsMatchup = bracket.data.find(item => item.round === 'Finals')
  let finalsWinner
  finalsMatchup.team1Wins === '4' ? finalsWinner = finalsMatchup.team1 : finalsWinner = finalsMatchup.team2




    return (
        <section className="champion">
            <TeamLogo className='finalsChampion' alt={finalsWinner} src={finalsWinner} year={pathnameYear}/>
            <Series series={finalsMatchup} topSeed = {westFinalsWinner} lowSeed={eastFinalsWinner}/>
        </section>
    )
}

