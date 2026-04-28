import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem('nfl-favorites');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('nfl-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (team) => {
    setFavorites((prev) =>
      prev.find((t) => t.id === team.id) ? prev : [...prev, team]
    );
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((t) => t.id !== id));
  };

  const isFavorite = (id) => favorites.some((t) => t.id === id);

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useFavorites() {
  return useContext(FavoritesContext);
}