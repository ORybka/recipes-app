/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework';
import { useRecipeContext } from '../context';
import renderRecipe from './Recipe';

export default function RecipeResults({ isDataLoading, error, addToLikedList }) {
  const { recipeList } = useRecipeContext();
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
