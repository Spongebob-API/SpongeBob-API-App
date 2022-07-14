import { useState, useContext, createContext } from 'react';

import { createFavorite, getFavorites, deleteFavorite } from './services/FetchUtils';

const DataContext = createContext();

export default function DataProvider() {
  const [favorites, setFavorites] = useState([]);

  async function handleAddToFavorites(favorite) {
    await createFavorite(favorite);
    const updatedFavorites = await getFavorites();

    setFavorites(updatedFavorites);
  }

  return <div>DataProvider</div>;
}
