/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../framework';
import { useRecipeContext } from '../context';

export default function renderRecipe() {
  const { recipeList } = useRecipeContext();
  const { strMeal, strInstructions, recipe } = recipeList;
  return (
    <div>
      <h3>{strMeal}</h3>
      <div>{strInstructions}</div>
      <div>{recipe}</div>
      <br />
    </div>
  );
}
