/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';

export default function RenderRandomBtn() {
  return (
    <>
      <button id="random-recipe-btn" onclick={window.GetRandomRecipe}>
        Click to get a recipe
      </button>
    </>
  );
}
