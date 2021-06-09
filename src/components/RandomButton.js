/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import RenderRandomRecipe from './RandomRecipe';
// import GetRandomRecipe from '../data/randomRecipesData';

export default function RenderRandomBtn({ data }) {
  return (
    <>
      <button id="random-recipe-btn" onclick={RenderRandomRecipe(data)}>
        Click to get a recipe
      </button>
    </>
  );
}
