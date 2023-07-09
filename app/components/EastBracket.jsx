import { usePathname } from 'next/navigation'
import TeamLogo from './TeamLogo';



export default function EastBracket({data}) {

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

    return (

        <>
        <section className="eastWinner click4"></section>

<section className="eastConference east">
  <section className="finalsEast">
    <img className="eastFinalistWinner" src="" alt="" />
    <div className="blank"></div>
    <div className="border"></div>
  </section>
  <section className="thirdRound east">
    <div className="thirdEast eastFinal click3">
      <section className="matchupThird">
        <img className="east1st8th4th5thWinner" src="" alt="" />
        <img className="east2nd7th3rd6thWinner" src="" alt="" />
      </section>
    </div>
  </section>
  <section className="secondRound east">
    <div className="secondEast eastUpper click2">
      <section className="matchupSecond">
        <img className="east1st8thWinner" src="" alt="" />
        <img className="east4th5thWinner" src="" alt="" />
      </section>
    </div>
    <div className="secondEast eastLower click2">
      <section className="matchupSecond">
        <img className="east2nd7thWinner" src="" alt="" />
        <img className="east3rd6thWinner" src="" alt="" />
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
