/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import renderRandomRecipe from './RandomRecipe';

export default function RandomRecipeResults({
  randomRecipe,
  isDataLoading,
  error,
  addToLikedList,
}) {
  if (
    randomRecipe === undefined ||
    (Object.keys(randomRecipe).length === 0 && randomRecipe.constructor === Object)
  ) {
    return <div>no randomRecipe</div>;
  } else {
    if (isDataLoading) {
      return <div>Loading ...</div>;
    }

    if (error !== null) {
      return <div>{error}</div>;
    }

    return (
      <>
        <>{renderRandomRecipe(randomRecipe)} </>
        <br />
        <button onclick={e => addToLikedList(randomRecipe.strMeal)}>Click to like</button>
        <br />
      </>
    );
  }
}
