import { usePathname } from 'next/navigation'
import TeamLogo from './TeamLogo';




export default function WestBracket({data}) {

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

    return (

        <>
  
  <section className="conference west">
    <section className="firstRound left top">
      <div className="firstLeft westOneEight click1">
        <section className="matchupWest top">
          <TeamLogo alt={west1st} src={west1st} year={pathnameYear}/>
          <TeamLogo alt={west8th} src={west8th} year={pathnameYear}/>
        </section>
      </div>
      <div className="firstLeft westFourFive click1">
        <section className="matchupWest">
        <TeamLogo alt={west4th} src={west4th} year={pathnameYear}/>
        <TeamLogo alt={west5th} src={west5th} year={pathnameYear}/>
        </section>
      </div>
      <div className="firstLeft westTwoSeven click1">
        <section className="matchupWest">
        <TeamLogo alt={west2nd} src={west2nd} year={pathnameYear}/>
        <TeamLogo alt={west7th} src={west7th} year={pathnameYear}/>
        </section>
      </div>
      <div className="firstLeft westThreeSix click1">
        <section className="matchupWest">
        <TeamLogo alt={west3rd} src={west3rd} year={pathnameYear}/>
        <TeamLogo alt={west6th} src={west6th} year={pathnameYear}/>
        </section>
      </div>
    </section>

    <section className="secondRound left">
      <div className="secondLeft westUpper click2">
        <section className="matchupSecondWest">
          <img className="west1st8thWinner" src="" alt="" />
          <img className="west4th5thWinner" src="" alt="" />
        </section>
      </div>
      <div className="secondLeft westLower click2">
        <section className="matchupSecondWest">
          <img className="west2nd7thWinner" src="" alt="" />
          <img className="west3rd6thWinner" src="" alt="" />
        </section>
      </div>
    </section>

    <section className="thirdRound left">
      <div className="thirdWest westFinal click3">
        <section className="matchupThirdWest">
          <img className="west1st8th4th5thWinner" src="" alt="" />
          <img className="west2nd7th3rd6thWinner" src="" alt="" />
        </section>
      </div>
    </section>

    <section className="finals click4">
      <img className="westFinalistWinner" src="" alt="" />
      <div className="blank"></div>
      <div className="border"></div>
    </section>
  </section>

  <section className="champion">
    <img className="finalsChampion" src="" alt="" />
  </section>



        </>
        
      
    );
}
