import { usePathname } from 'next/navigation'
import TeamLogo from './TeamLogo';
import Series from './Series';




export default function WestBracket({data, bracket}) {

  if (data === null) {
    // Render a loading indicator or placeholder
    return <div></div>;
  }

  const pathname = usePathname()
  const pathnameYear = pathname.slice(-4)

  const west1st = data.find((item) => item.seed === '1st').collectionName.slice(0,3);
  const west2nd = data.find((item) => item.seed === '2nd').collectionName.slice(0,3);
  const west3rd = data.find((item) => item.seed === '3rd').collectionName.slice(0,3);
  const west4th = data.find((item) => item.seed === '4th').collectionName.slice(0,3);
  const west5th = data.find((item) => item.seed === '5th').collectionName.slice(0,3);
  const west6th = data.find((item) => item.seed === '6th').collectionName.slice(0,3);
  const west7th = data.find((item) => item.seed === '7th').collectionName.slice(0,3);
  const west8th = data.find((item) => item.seed === '8th').collectionName.slice(0,3);

  const west1st8thMatchup = bracket.data.find(item => item.round === 'Western Conference First Round' && (item.team1 === west1st || item.team2 === west1st))
  let west1st8thWinner
  west1st8thMatchup.team1Wins > west1st8thMatchup.team2Wins ? west1st8thWinner = west1st8thMatchup.team1 : west1st8thWinner = west1st8thMatchup.team2

  const west4th5thMatchup = bracket.data.find(item => item.round === 'Western Conference First Round' && (item.team1 === west4th || item.team2 === west4th))
  let west4th5thWinner
  west4th5thMatchup.team1Wins > west4th5thMatchup.team2Wins ? west4th5thWinner = west4th5thMatchup.team1 : west4th5thWinner = west4th5thMatchup.team2

  const west2nd7thMatchup = bracket.data.find(item => item.round === 'Western Conference First Round' && (item.team1 === west2nd || item.team2 === west2nd))
  let west2nd7thWinner
  west2nd7thMatchup.team1Wins >  west2nd7thMatchup.team2Wins ? west2nd7thWinner = west2nd7thMatchup.team1 : west2nd7thWinner = west2nd7thMatchup.team2

  const west3rd6thMatchup = bracket.data.find(item => item.round === 'Western Conference First Round' && (item.team1 === west3rd || item.team2 === west3rd))
  let west3rd6thWinner
  west3rd6thMatchup.team1Wins > west3rd6thMatchup.team2Wins ? west3rd6thWinner = west3rd6thMatchup.team1 : west3rd6thWinner = west3rd6thMatchup.team2


  const westUpperMatchup = bracket.data.find(item => item.round === 'Western Conference Semifinals' && (item.team1 === west1st8thWinner || item.team2 === west1st8thWinner))
  let westUpperWinner
  westUpperMatchup.team1Wins > westUpperMatchup.team2Wins ? westUpperWinner = westUpperMatchup.team1 : westUpperWinner = westUpperMatchup.team2

  const westLowerMatchup = bracket.data.find(item => item.round === 'Western Conference Semifinals' && (item.team1 === west3rd6thWinner || item.team2 === west3rd6thWinner))
  let westLowerWinner
  westLowerMatchup.team1Wins > westLowerMatchup.team2Wins ? westLowerWinner = westLowerMatchup.team1 : westLowerWinner = westLowerMatchup.team2


  const westFinalsMatchup = bracket.data.find(item => item.round === 'Western Conference Finals' && (item.team1 === westUpperWinner || item.team2 === westUpperWinner))
  let westFinalsWinner
  westFinalsMatchup.team1Wins > westFinalsMatchup.team2Wins ? westFinalsWinner = westFinalsMatchup.team1 : westFinalsWinner = westFinalsMatchup.team2

    return (

        <>
  
  <section className="conference west">
    <section className="firstRound left top">
      <div className="firstLeft westOneEight click1">
        <section className="matchupWest top">
          <TeamLogo alt={west1st} src={west1st} year={pathnameYear}/>
          <Series series={west1st8thMatchup} topSeed = {west1st} lowSeed={west8th}/>
          <TeamLogo alt={west8th} src={west8th} year={pathnameYear}/>
          
        </section>
      </div>
      <div className="firstLeft westFourFive click1">
        <section className="matchupWest">
        <TeamLogo alt={west4th} src={west4th} year={pathnameYear}/>
        <Series series={west4th5thMatchup} topSeed = {west4th} lowSeed={west5th}/>
        <TeamLogo alt={west5th} src={west5th} year={pathnameYear}/>
        
        </section>
      </div>
      <div className="firstLeft westTwoSeven click1">
        <section className="matchupWest">
        <TeamLogo alt={west2nd} src={west2nd} year={pathnameYear}/>
        <Series series={west3rd6thMatchup} topSeed = {west2nd} lowSeed={west7th}/>
        <TeamLogo alt={west7th} src={west7th} year={pathnameYear}/>
        
        </section>
      </div>
      <div className="firstLeft westThreeSix click1">
        <section className="matchupWest">
        <TeamLogo alt={west3rd} src={west3rd} year={pathnameYear}/>
        <Series series={west2nd7thMatchup} topSeed = {west3rd} lowSeed={west6th} />
        <TeamLogo alt={west6th} src={west6th} year={pathnameYear}/>
        
        </section>
      </div>
    </section>

    <section className="secondRound left">
      <div className="secondLeft westUpper click2">
        <section className="matchupSecondWest">
        <TeamLogo alt={west1st8thWinner} src={west1st8thWinner} year={pathnameYear}/>
        <Series series={westUpperMatchup} topSeed = {west1st8thWinner} lowSeed={west4th5thWinner}/>
          <TeamLogo alt={west4th5thWinner} src={west4th5thWinner} year={pathnameYear}/>
          
        </section>
      </div>
      <div className="secondLeft westLower click2">
        <section className="matchupSecondWest">
        <TeamLogo alt={west2nd7thWinner} src={west2nd7thWinner} year={pathnameYear}/>
        <Series series={westLowerMatchup} topSeed = {west2nd7thWinner} lowSeed={west3rd6thWinner}/>
          <TeamLogo alt={west3rd6thWinner} src={west3rd6thWinner} year={pathnameYear}/>
          
        </section>
      </div>
    </section>

    <section className="thirdRound left">
      <div className="thirdWest westFinal click3">
        <section className="matchupThirdWest">
        <TeamLogo alt={westUpperWinner} src={westUpperWinner} year={pathnameYear}/>
        <Series series={westFinalsMatchup} topSeed = {westUpperWinner} lowSeed={westLowerWinner}/>
          <TeamLogo alt={westLowerWinner} src={westLowerWinner} year={pathnameYear}/>
          
        </section>
      </div>
    </section>

    <section className="finals click4">
    <TeamLogo alt={westFinalsWinner} src={westFinalsWinner} year={pathnameYear}/>
      <div className="blank"></div>
      <div className="border"></div>
    </section>
  </section>

        </>
        
      
    );
}
