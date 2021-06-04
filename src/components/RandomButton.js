/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import GetRandomRecipe from '../data/randomRecipesData';

export default function RenderRandomBtn() {
  return (
    <>
      <button id="random-recipe-btn" onclick={GetRandomRecipe}>
        Click to get a recipe
      </button>
    </>
  );
}
