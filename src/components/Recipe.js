/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';

function getCurrentRecipeData() {
  const { currentRecipe, recipeList } = window.dataStore;
  return recipeList[currentRecipe];
}

export default function renderRecipe(recipe) {
  const { currentRecipe } = window.dataStore;
  const { strInstructions } = recipeData[0];
  const recipeData = getCurrentRecipeData();
  if (!recipeData) return null;

  return (
    <div>
      <h3>{currentRecipe}</h3>
      <div>{strInstructions}</div>
      <div>{recipe}</div>
      <br />
      <button id="like-recipe-btn" onclick={e => addLikedRecipe(strMeal)}>
        Click to like
      </button>
      <br />
    </div>
  );
}
