/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../framework/element';

export default function renderRecipe(recipeData) {
  const { strMeal, strInstructions, recipe } = recipeData;
  return (
    <div>
      <h3>{strMeal}</h3>
      <div>{strInstructions}</div>
      <div>{recipe}</div>
      <br />
    </div>
  );
}
