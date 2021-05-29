/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';

export default function RenderRandomRecipe() {
  const { randomRecipe } = window.dataStore;

  const { strMeal, strCategory, strInstructions } = randomRecipe;
  if (Object.keys(randomRecipe).length === 0 && randomRecipe.constructor === Object) {
    return null;
  } else {
    return (
      <>
        <div>
          Your meal today is {strMeal} from {strCategory} category.
        </div>
        <br />
        <div>Please, follow the instructions to cook {strMeal}:</div>
        <br />
        <div>{strInstructions}</div>
        <br />
        <button id="like-random-btn" onclick={e => addLikedRecipe(strMeal)}>
          Click to like
        </button>
        <br />
      </>
    );
  }
}
