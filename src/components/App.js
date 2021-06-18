import React, { useState } from 'react';
import RandomRecipeResults from './RandomRecipeResults';
import RandomRecipe from './RandomRecipe';
import SearchByDish from './SearchByDish';
import RecipeResults from './RecipeResults';
import LikedRecipesButton from './LikedRecipesButton/LikedRecipesButton';
import { useRecipes } from '../data/customHooks';

export default function App() {
  const { isDataLoading, error, currentRecipe, setCurrentRecipe, recipeList } = useRecipes();
  const [likedList, setLikedList] = useState([]);

  const addToLikedList = recipe => {
    if (!likedList.includes(recipe)) {
      setLikedList([...likedList, recipe]);
    }
  };

  return (
    <>
      <RandomRecipeResults addToLikedList={addToLikedList} />
      {/* <RandomRecipe
        randomRecipe={randomRecipe}
        isDataLoading={isDataLoading}
        error={error}
        addToLikedList={addToLikedList}
      /> */}
      <br />
      <br />
      <SearchByDish onBlur={setCurrentRecipe} />
      <br />
      <RecipeResults
        currentRecipe={currentRecipe}
        recipeList={recipeList}
        isDataLoading={isDataLoading}
        error={error}
        addToLikedList={addToLikedList}
      />
      <br />
      <LikedRecipesButton likedList={likedList} />
    </>
  );
}
