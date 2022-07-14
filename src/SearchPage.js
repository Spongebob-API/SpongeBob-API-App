import { useEffect, useState } from 'react';
import ListPage from './ListPage';
import { fetchShows } from './services/FetchUtils';

export default function SearchPage() {
  const [episodes, setEpisodes] = useState([]);
  //loading later
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle('');
    handleEpisodeSearch(title);
  }, []);//eslint-disable-line
  async function handleEpisodeSearch(search) {
    const data = await fetchShows(search);
    setEpisodes(data);
    setTitle('');
  }

  return (<div>
    <section>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={() => handleEpisodeSearch(title)}>Search</button>
    </section>
    <ListPage episodes={episodes}/>
  </div>);
}
