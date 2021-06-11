/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import RenderRandomRecipe from './RandomRecipe';

export default function RenderRandomBtn({ randomRecipe, setReload, addToLikedList }) {
  return (
    <>
      <button id="random-recipe-btn" onclick={() => setReload(true)}>
        Click to get a recipe
      </button>
      <RenderRandomRecipe randomRecipe={randomRecipe} />
      <button id="like-random-btn" onclick={e => addToLikedList(randomRecipe.strMeal)}>
        Click to like
      </button>
      <br />
    </>
  );
}
