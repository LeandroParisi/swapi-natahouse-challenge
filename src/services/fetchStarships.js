export default async function fetchStarships () {
  let results = []
  let apiUrl = 'https://swapi.dev/api/starships/';

  while(apiUrl) {
    const RESPONSE = await fetch(apiUrl);
    const DATA = await RESPONSE.json();
    results = [...results, ...DATA.results];
    apiUrl = DATA.next
  }
  
  return results.filter(ship => ship.MGLT !== 'unknown');
}