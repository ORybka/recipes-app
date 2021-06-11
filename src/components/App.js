/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment, useState } from '../framework';
import RenderRandomBtn from './RandomButton';
import RandomRecipeResults from './RandomRecipeResults';
import SearchByDish from './SearchByDish';
import RecipeResults from './RecipeResults';
import { showLikedRecipesButton, ShowLikedRecipes } from './ShowLikedRecipes';
import { useRecipes } from '../data/customHooks';

export default function App() {
  const {
    isDataLoading,
    setDataLoading,
    error,
    randomRecipe,
    currentRecipe,
    setCurrentRecipe,
    recipeList,
  } = useRecipes();
  const [likedList, setLikedList] = useState([]);

  const addToLikedList = recipe => {
    if (!likedList.includes(recipe)) {
      setLikedList([...likedList, recipe]);
    }
  };

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
