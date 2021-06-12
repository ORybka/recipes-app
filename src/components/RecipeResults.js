import React from 'react';
import renderRecipe from './Recipe';

export default function RecipeResults({
  currentRecipe,
  recipeList,
  isDataLoading,
  error,
  addToLikedList,
}) {
  if (currentRecipe === '') {
    return <div>Please, type a recipe name or try your luck and get random one</div>;
  } else {
    if (isDataLoading) {
      return <div>Loading ...</div>;
    }

    if (error !== null) {
      return <div>No such dish 😕</div>;
    }

    return (
      <>
        <>{renderRecipe(recipeList)} </>
        <br />
        <button onClick={e => addToLikedList(recipeList.strMeal)}>Click to like</button>
        <br />
      </>
    );
  }
}
