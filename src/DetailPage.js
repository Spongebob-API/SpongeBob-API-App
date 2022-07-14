import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSingleEpisode } from './services/FetchUtils';

export default function DetailPage() {
  const params = useParams();
  const [episode, setEpisode] = useState([]);
  async function fetch() {
    const data = await fetchSingleEpisode(params.number);

    setEpisode(data);
  }
  useEffect(() => {
    fetch();
  }, []);//eslint-disable-line

  return (
    <div>
      <h1>{episode.name}</h1>
      <img src={`https://www.themoviedb.org/t/p/w227_and_h127_bestv2/${episode.still_path}`} height='300px'/>
      <p>{episode.overview}</p>
      <h3>Date Aired: {episode.air_date}</h3>
      {
        episode.guest_stars ? <h3>Guest stars: {episode.guest_stars.map(star => <p key={star.character + star.credit_id}>{star.character}</p>)}</h3> : <></>
      }
      <p>Runtime: {episode.runtime} minutes</p>
    </div>
  );
}
