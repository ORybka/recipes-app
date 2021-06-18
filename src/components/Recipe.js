import React from 'react';

export default function Recipe(recipeData) {
  const { strMeal, strInstructions, recipe } = recipeData;
  return (
    <>
      <h3>{strMeal}</h3>
      <div>{strInstructions}</div>
      <div>{recipe}</div>
      <br />
    </>
  );
}
