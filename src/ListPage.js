import { useEffect } from 'react';
import { fetchShows } from './services/FetchUtils';

export default function ListPage() {
  async function fetch() {
    const data = await fetchShows();
    console.log(data);
  }
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>ListPage</div>
  );
}
