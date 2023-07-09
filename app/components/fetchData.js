// playoffData.js

export async function fetchPlayoffData(pathnameYear) {
    const response = await fetch(`/api/data/${pathnameYear}`);
    const data = await response.json();
    const playoffData = data.find(obj => obj.collectionName === 'playoffStats');
    return playoffData;
  }
  

export async function fetchTeamData(pathnameYear) {
  const response = await fetch(`/api/data/${pathnameYear}`)
  const data = await response.json();

console.log(data)

let west3rd = temp1.find(collection => collection.data.find(item => item.conference === 'west' && item.seed === '3rd'))

//create a new array
// Assuming `data` is the array containing the existing data objects





  return data
}