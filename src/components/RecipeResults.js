import React from 'react';
import Recipe from './Recipe';

export default function RecipeResults({
  currentRecipe,
  recipeList,
  isDataLoading,
  error,
  addToLikedList,
}) {
  if (currentRecipe === '') {
    return <div>Please, type a recipe name or try your luck and get random one</div>;
  }
  if (isDataLoading) {
    return <div>Loading ...</div>;
  }

  if (error !== null) {
    return <div>No such dish 😕</div>;
  }

  return (
    <>
      <>{Recipe(recipeList)} </>
      <br />
      <button onClick={e => addToLikedList(recipeList.strMeal)}>Click to like</button>
      <br />
    </>
  );
}
