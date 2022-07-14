// import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ListPage({ episodes }) {



  return (
    <div className='shows'>
      <h1>Placeholder</h1>
      {
        episodes && episodes.length && episodes.map((episode, i) => {
      
          return <Link to={`/episode/${episode.episode_number}`} className='single-episode' key={episode.name + i}>
            <img src={`https://www.themoviedb.org/t/p/w227_and_h127_bestv2/${episode.still_path}`} height="100"/>
            <h2>{episode.name}</h2>
            <p>{episode.episode_number}</p>
            <p>{episode.overview}</p>
          </Link>;
        })
      }
    </div>
  );
}
