/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';

export default function RenderRandomBtn({ setReload }) {
  return (
    <>
      <button id="random-recipe-btn" onclick={() => setReload(true)}>
        Click to get a recipe
      </button>
      <br />
    </>
  );
}
