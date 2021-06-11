import { useState, useEffect } from '../framework';
import GetRandomRecipe from '../data/randomRecipesData';
import performSearch from '../data/recipesData';

export const useRecipes = () => {
  const [error, setError] = useState(null);
  const [isDataLoading, setDataLoading] = useState(false);
  const [randomRecipe, setRandomRecipe] = useState({});
  const [currentRecipe, setCurrentRecipe] = useState('');
  const [recipeList, setRecipeList] = useState({});

  useEffect(() => {
    if (isDataLoading) {
      GetRandomRecipe()
        .then(({ response, results }) => {
          const { message, code } = response;
          if (code !== '200' && message) throw Error(message);
          setError(null);
          setRandomRecipe(results.meals[0]);
        })
        .catch(setError)
        .finally(() => setDataLoading(false));
    }
  }, [isDataLoading]);

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
    randomRecipe,
    currentRecipe,
    setCurrentRecipe,
    recipeList,
  };
};
