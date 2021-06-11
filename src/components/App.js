/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework';
import { useState, useEffect } from '../framework';
import GetRandomRecipe from '../data/randomRecipesData';
import performSearch from '../data/recipesData';
import RenderRandomBtn from './RandomButton';
import RandomRecipeResults from './RandomRecipeResults';
import SearchByDish from './SearchByDish';
import RecipeResults from './RecipeResults';
import { showLikedRecipesButton, ShowLikedRecipes } from './ShowLikedRecipes';

export default function App() {
  const [error, setError] = useState(null);
  const [isDataLoading, setDataLoading] = useState(false);
  const [randomRecipe, setRandomRecipe] = useState({});
  const [currentRecipe, setCurrentRecipe] = useState('');
  const [recipeList, setRecipeList] = useState({});
  const [likedList, setLikedList] = useState([]);

  const addToLikedList = recipe => {
    if (!likedList.includes(recipe)) {
      setLikedList([...likedList, recipe]);
    }
  };

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

  return (
    <>
      <RenderRandomBtn randomRecipe={randomRecipe} setReload={setDataLoading} />
      <RandomRecipeResults
        randomRecipe={randomRecipe}
        isDataLoading={isDataLoading}
        error={error}
        addToLikedList={addToLikedList}
      />
      <br />
      <br />
      <SearchByDish onChange={setCurrentRecipe} />
      <br />
      <RecipeResults
        currentRecipe={currentRecipe}
        recipeList={recipeList}
        isDataLoading={isDataLoading}
        error={error}
        addToLikedList={addToLikedList}
      />
      <br />
      <>{showLikedRecipesButton()}</>
      <ShowLikedRecipes likedList={likedList} />
    </>
  );
}
