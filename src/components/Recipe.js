/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement } from '../framework/element';
import addLikedRecipe from './LikeRecipe';

export default function renderRecipe(recipeData) {
  return (
    <div>
      <h3>{recipeData.strMeal}</h3>
      <div>{recipeData.strInstructions}</div>
      <div>{recipeData.recipe}</div>
      <br />
      <button id="like-recipe-btn" onclick={e => addLikedRecipe(recipeData.strMeal)}>
        Click to like
      </button>
      <br />
    </div>
  );
}
