import { useState, useContext, createContext } from 'react';
import { createFavorite, deleteFavorite } from './services/FetchUtils';
import { getUser, getFavorites } from './services/FetchUtils';

const DataContext = createContext();

export default function DataProvider({ children }) {
  const [user, setUser] = useState(getUser());
  const [favorites, setFavorites] = useState([]);

  async function handleAddToFavorites(favorite) {
    await createFavorite(favorite);
    const updatedFavorites = await getFavorites();

    setFavorites(updatedFavorites);
  }

  async function handleFetchFavorites(id) {
    const favorites = await getFavorites(id);

    setFavorites(favorites);
  }

  async function handleDeleteFavorite(id) {
    await deleteFavorite(id);
    const updatedFavorites = await getFavorites();

    setFavorites(updatedFavorites);
  }

  const stateAndSetters = {
    user,
    setUser,
    favorites,
    handleAddToFavorites,
    handleFetchFavorites,
    handleDeleteFavorite,
  };

  return <DataContext.Provider value={stateAndSetters}>{children}</DataContext.Provider>;
}

export function useDataContext() {
  return useContext(DataContext);
}
