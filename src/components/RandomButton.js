import React from 'react';

export default function RenderRandomBtn({ setReload }) {
  return (
    <>
      <button id="random-recipe-btn" onClick={() => setReload(true)}>
        Click to get a recipe
      </button>
      <br />
    </>
  );
}
