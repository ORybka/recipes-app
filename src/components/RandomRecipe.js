/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';

export default function RenderRandomRecipe({ randomRecipe }) {
  if (
    randomRecipe === undefined ||
    (Object.keys(randomRecipe).length === 0 && randomRecipe.constructor === Object)
  ) {
    return null;
  } else {
    const { strMeal, strCategory, strInstructions } = randomRecipe;
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
      </>
    );
  }
}
