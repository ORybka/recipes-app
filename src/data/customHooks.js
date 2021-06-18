import { useState, useEffect } from 'react';
import performSearch from './recipesData';

export const useRecipes = () => {
  const [error, setError] = useState(null);
  const [isDataLoading, setDataLoading] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState('');
  const [recipeList, setRecipeList] = useState({});

  useEffect(() => {
    if (currentRecipe) {
      performSearch(currentRecipe)
        .then(data => {
          const { message, code } = data;
          if (code !== '200' && message) throw Error(message);
          setError(null);
          setRecipeList(data.meals[0]);
        })
        .catch(setError)
        .finally(() => setDataLoading(false));
    }
  }, [currentRecipe]);

  return {
    isDataLoading,
    setDataLoading,
    error,
    currentRecipe,
    setCurrentRecipe,
    recipeList,
  };
};
