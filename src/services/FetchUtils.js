export async function fetchShows() {

  const rawData = await fetch(`/.netlify/functions/spongebob`);
  
  const data = await rawData.json();
  
  return data;
}
