/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';

export default function RenderRandomRecipe({ data }) {
  const { strMeal, strCategory, strInstructions } = data;

  if (Object.keys(data).length === 0 && data.constructor === Object) {
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
      </>
    );
  }
}
