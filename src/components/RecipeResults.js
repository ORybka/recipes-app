/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework';
import renderRecipe from './Recipe';

export default function RecipeResults({
  currentRecipe,
  recipeList,
  isDataLoading,
  error,
  addToLikedList,
}) {
  if (currentRecipe === '') {
    return <div>Please, choose the recipe from the list or try your luck and get random one</div>;
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
        <button onclick={e => addToLikedList(recipeList.strMeal)}>Click to like</button>
        <br />
      </>
    );
  }
}
