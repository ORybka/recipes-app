/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import { useState, useEffect } from '../framework/hooks';
import GetRandomRecipe from '../data/randomRecipesData';
import performSearch from '../data/recipesData';
import RenderRandomBtn from './RandomButton';
import SearchByDish from './SearchByDish';
import RecipeResults from './RecipeResults';

export default function App() {
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
        .then(({ response, results }) => {
          const { message, code } = response;
          if (code !== '200' && message) throw Error(message);
          setError(null);
          setRecipeList(results.meals[0]);
        })
        .catch(setError)
        .finally(() => setDataLoading(false));
    }
  }, [currentRecipe]);

  return (
    <>
      <RenderRandomBtn data={randomRecipe} setReload={setDataLoading} />
      <br />
      <br />
      <SearchByDish onChange={setCurrentRecipe} />
      <br />
      <RecipeResults
        currentRecipe={currentRecipe}
        recipeList={recipeList}
        isDataLoading={isDataLoading}
        error={error}
      />
    </>
  );
}
