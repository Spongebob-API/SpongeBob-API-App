import { useEffect } from 'react';
import { fetchShows } from './services/FetchUtils';

export default function ListPage({ episodes }) {
  async function fetch() {
    const data = await fetchShows();
    console.log(data);
  }
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className='shows'>
      {
        episodes && episodes.length && episodes.map((episode, i) => {
          
          return <div className='single-episode' key={episode.name + i}>
            {
              <div>
                <img src={episode.still_path} height="100"/>
                <h2>{episode.name}</h2>
                <p>{episode.episode_number}</p>
                <p>{episode.overview}</p>
              </div>
            }
          </div>;
        })
      }
    </div>
  );
}
