import { usePathname } from 'next/navigation'
import TeamLogo from './TeamLogo';

export default function Lotto({data}){
  if (data === null) {
    // Render a loading indicator or placeholder
    return <div></div>;
  }
  
  const pathname = usePathname()
  const pathnameYear = pathname.slice(-4)

  const west9th = data.find((item) => item.conference === 'west' && item.seed === '9th').collectionName.slice(0,3);
  const west10th = data.find((item) => item.conference === 'west' && item.seed === '10th').collectionName.slice(0,3);
  const west11th = data.find((item) => item.conference === 'west' && item.seed === '11th').collectionName.slice(0,3);
  const west12th = data.find((item) => item.conference === 'west' && item.seed === '12th').collectionName.slice(0,3);
  const west13th = data.find((item) => item.conference === 'west' && item.seed === '13th').collectionName.slice(0,3);

  let west14th
  pathnameYear > 1995 ? west14th = data.find((item) => item.conference === 'west' && item.seed === '14th').collectionName.slice(0,3) : west14th = null

  let west15th
  pathnameYear > 2004 ? west15th = data.find((item) => item.conference === 'west' && item.seed === '15th').collectionName.slice(0,3) : west15th = null

  const east9th = data.find((item) => item.conference === 'east' && item.seed === '9th').collectionName.slice(0,3);
  const east10th = data.find((item) => item.conference === 'east' && item.seed === '10th').collectionName.slice(0,3);
  const east11th = data.find((item) => item.conference === 'east' && item.seed === '11th').collectionName.slice(0,3);
  const east12th = data.find((item) => item.conference === 'east' && item.seed === '12th').collectionName.slice(0,3);
  const east13th = data.find((item) => item.conference === 'east' && item.seed === '13th').collectionName.slice(0,3);

  let east14th
  pathnameYear > 2004 ? east14th = data.find((item) => item.conference === 'east' && item.seed === '14th').collectionName.slice(0,3) : east14th = null

  let east15th
  pathnameYear > 2004 ? east15th = data.find((item) => item.conference === 'east' && item.seed === '15th').collectionName.slice(0,3) : east15th = null


    return (
        <footer>
    <section className="westLotto">
      <TeamLogo alt={west9th} src={west9th} year={pathnameYear}/>
      <TeamLogo alt={west10th} src={west10th} year={pathnameYear}/>
      <TeamLogo alt={west11th} src={west11th} year={pathnameYear}/>
      <TeamLogo alt={west12th} src={west12th} year={pathnameYear}/>
      <TeamLogo alt={west13th} src={west13th} year={pathnameYear}/>
      {west14th ? <TeamLogo alt={west14th} src={west14th} year={pathnameYear}/> : null}
      {west15th ? <TeamLogo alt={west15th} src={west15th} year={pathnameYear}/> : null}
    </section>
    <section className="eastLotto">
      <TeamLogo alt={east9th} src={east9th} year={pathnameYear}/>
      <TeamLogo alt={east10th} src={east10th} year={pathnameYear}/>
      <TeamLogo alt={east11th} src={east11th} year={pathnameYear}/>
      <TeamLogo alt={east12th} src={east12th} year={pathnameYear}/>
      <TeamLogo alt={east13th} src={east13th} year={pathnameYear}/>
      {east14th ? <TeamLogo alt={east14th} src={east14th} year={pathnameYear}/> : null}
      {east15th ? <TeamLogo alt={east15th} src={east15th} year={pathnameYear}/> : null}
    </section>
  </footer>
    )
}