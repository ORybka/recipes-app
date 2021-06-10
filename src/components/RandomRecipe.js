/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import addLikedRecipe from './LikeRecipe';

export default function RenderRandomRecipe({ data }) {
  if (data === undefined || (Object.keys(data).length === 0 && data.constructor === Object)) {
    return null;
  } else {
    const { strMeal, strCategory, strInstructions } = data;
    return (
      <>
        <div>
          Your meal today is <strong>{strMeal}</strong> from {strCategory} category.
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
