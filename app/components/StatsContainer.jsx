import React, { useContext } from 'react';
import { AppContext } from './statsContext';

export default function StatsContainer({ data }) {
  if (data === null) {
    // Render a loading indicator or placeholder
    return <div className='hidden'></div>;
  }

  const { isHidden } = useContext(AppContext);
  const { teamStats } = useContext(AppContext);

  console.log(teamStats);

  let containerData = data.filter(
    collection => collection.collectionName === `${teamStats}Stats`
  )[0];


  // Check if containerData exists before accessing its data property
  let filteredData
  if (containerData){
    filteredData = containerData.data.filter(obj => !obj.seed).sort((a,b) => parseFloat(b.stats.ws) - parseFloat(a.stats.ws));
    console.log(filteredData)
  }

  if (filteredData){
    return (
        <section className='statsContainer'>
          <section id='stats' className={isHidden ? 'hidden' : ''}>
            <span className='record'></span> Top Performers
            <section className='Players'>
              {[...Array(6).keys()].map(i => (
                <section key={i} className={`player${i}`}>
                  
                  <span className='playerName'>{`${filteredData[i].playerName}`}</span>
                  <span className='gp'>{`GP: ${filteredData[i].stats.games}`}</span>
                  <span className='mpg'>{`MPG: ${filteredData[i].stats.mpg}`}</span>
                  <span className='ppg'>{`PPG: ${filteredData[i].stats.pts}`}</span>
                  <span className='rpg'>{`RPG: ${filteredData[i].stats.trb}`}</span>
                  <span className='apg'>{`APG: ${filteredData[i].stats.ast}`}</span>
                  <span className='spg'>{`SPG: ${filteredData[i].stats.stl}`}</span>
                  <span className='bpg'>{`BPG: ${filteredData[i].stats.blk}`}</span>
                  <span className='fg_pct'>{`FG%: ${filteredData[i].stats.fg_pct}`}</span>
                  <span className='three_pct'>{`3P%: ${filteredData[i].stats.threes_pct}`}</span>
                  <span className='ft_pct'>{`FT%: ${filteredData[i].stats.ft_pct}`}</span>
                  <span className='ts_pct'>{`TS%: ${filteredData[i].stats.ts_pct}`}</span>
                  <span className='ws'>{`WS: ${filteredData[i].stats.ws}`}</span>
                  <span className='bpm'>{`BPM: ${filteredData[i].stats.bpm}`}</span>
                  <span className='vorp'>{`VORP: ${filteredData[i].stats.vorp}`}</span>
                </section>
              ))}
            </section>
          </section>
        </section>
      );
  }

}
