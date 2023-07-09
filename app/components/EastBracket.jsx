

import { usePathname } from 'next/navigation'
import TeamLogo from './TeamLogo';



export default function EastBracket({data, bracket}) {

  if (data === null) {
    // Render a loading indicator or placeholder
    return <div></div>;
  }

  const pathname = usePathname()
  const pathnameYear = pathname.slice(-4)


  // Extracting east1st, east2nd, etc. from the data prop
  const east1st = data.find((item) => item.seed === '1st').collectionName.slice(0,3);
  const east2nd = data.find((item) => item.seed === '2nd').collectionName.slice(0,3);
  const east3rd = data.find((item) => item.seed === '3rd').collectionName.slice(0,3);
  const east4th = data.find((item) => item.seed === '4th').collectionName.slice(0,3);
  const east5th = data.find((item) => item.seed === '5th').collectionName.slice(0,3);
  const east6th = data.find((item) => item.seed === '6th').collectionName.slice(0,3);
  const east7th = data.find((item) => item.seed === '7th').collectionName.slice(0,3);
  const east8th = data.find((item) => item.seed === '8th').collectionName.slice(0,3);



  const east1st8thMatchup = bracket.data.find(item => item.round === 'Eastern Conference First Round' && (item.team1 === east1st || item.team2 === east1st))
  let east1st8thWinner
  east1st8thMatchup.team1Wins === '4' ? east1st8thWinner = east1st8thMatchup.team1 : east1st8thWinner = east1st8thMatchup.team2

  const east4th5thMatchup = bracket.data.find(item => item.round === 'Eastern Conference First Round' && (item.team1 === east4th || item.team2 === east4th))
  let east4th5thWinner
  east4th5thMatchup.team1Wins === '4' ? east4th5thWinner = east4th5thMatchup.team1 : east4th5thWinner = east4th5thMatchup.team2

  const east2nd7thMatchup = bracket.data.find(item => item.round === 'Eastern Conference First Round' && (item.team1 === east2nd || item.team2 === east2nd))
  let east2nd7thWinner
  east2nd7thMatchup.team1Wins === '4' ? east2nd7thWinner = east2nd7thMatchup.team1 : east2nd7thWinner = east2nd7thMatchup.team2

  const east3rd6thMatchup = bracket.data.find(item => item.round === 'Eastern Conference First Round' && (item.team1 === east3rd || item.team2 === east3rd))
  let east3rd6thWinner
  east3rd6thMatchup.team1Wins === '4' ? east3rd6thWinner = east3rd6thMatchup.team1 : east3rd6thWinner = east3rd6thMatchup.team2


  const eastUpperMatchup = bracket.data.find(item => item.round === 'Eastern Conference Semifinals' && (item.team1 === east1st8thWinner || item.team2 === east1st8thWinner))
  let eastUpperWinner
  eastUpperMatchup.team1Wins === '4' ? eastUpperWinner = eastUpperMatchup.team1 : eastUpperWinner = eastUpperMatchup.team2

  const eastLowerMatchup = bracket.data.find(item => item.round === 'Eastern Conference Semifinals' && (item.team1 === east3rd6thWinner || item.team2 === east3rd6thWinner))
  let eastLowerWinner
  eastLowerMatchup.team1Wins === '4' ? eastLowerWinner = eastLowerMatchup.team1 : eastLowerWinner = eastLowerMatchup.team2


  const eastFinalsMatchup = bracket.data.find(item => item.round === 'Eastern Conference Finals' && (item.team1 === eastUpperWinner || item.team2 === eastUpperWinner))
  let eastFinalsWinner
  eastFinalsMatchup.team1Wins === '4' ? eastFinalsWinner = eastFinalsMatchup.team1 : eastFinalsWinner = eastFinalsMatchup.team2

    return (

        <>
        <section className="eastWinner click4"></section>

<section className="eastConference east">
  <section className="finalsEast">
    <TeamLogo className='' alt={eastFinalsWinner} src={eastFinalsWinner} year={pathnameYear}/>
    <div className="border"></div>
  </section>
  <section className="thirdRound east">
    <div className="thirdEast eastFinal click3">
      <section className="matchupThird">
      <TeamLogo alt={eastUpperWinner} src={eastUpperWinner} year={pathnameYear}/>
      <TeamLogo alt={eastLowerWinner} src={eastLowerWinner} year={pathnameYear}/>
      </section>
    </div>
  </section>
  <section className="secondRound east">
    <div className="secondEast eastUpper click2">
      <section className="matchupSecond">
      <TeamLogo alt={east1st8thWinner} src={east1st8thWinner} year={pathnameYear}/>
      <TeamLogo alt={east4th5thWinner} src={east4th5thWinner} year={pathnameYear}/>
      </section>
    </div>
    <div className="secondEast eastLower click2">
      <section className="matchupSecond">
      <TeamLogo alt={east2nd7thWinner} src={east2nd7thWinner} year={pathnameYear}/>
      <TeamLogo alt={east3rd6thWinner} src={east3rd6thWinner} year={pathnameYear}/>
      </section>
    </div>
  </section>
  <section className="firstRound east">
    <div className="firstEast eastOneEight click1">
      <section className="matchup">
        <TeamLogo alt={east1st} src={east1st} year={pathnameYear}/>
        <TeamLogo alt={east8th} src={east8th} year={pathnameYear}/>
      </section>
    </div>
    <div className="firstEast eastFourFive click1">
      <section className="matchup">
      <TeamLogo alt={east4th} src={east4th} year={pathnameYear}/>
      <TeamLogo alt={east5th} src={east5th} year={pathnameYear}/>
      </section>
    </div>
    <div className="firstEast eastTwoSeven click1">
      <section className="matchup">
      <TeamLogo alt={east2nd} src={east2nd} year={pathnameYear}/>
      <TeamLogo alt={east7th} src={east7th} year={pathnameYear}/>
      </section>
    </div>
    <div className="firstEast eastThreeSix click1">
      <section className="matchup">
      <TeamLogo alt={east3rd} src={east3rd} year={pathnameYear}/>
      <TeamLogo alt={east6th} src={east6th} year={pathnameYear}/>
      </section>
    </div>
  </section>
</section>
        </>

    )
}
