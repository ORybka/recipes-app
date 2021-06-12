import React from 'react';

export default function renderRandomRecipe(recipe) {
  if (recipe) {
    const { strMeal, strCategory, strInstructions } = recipe;
    return (
      <>
        <div>
          Your meal today is <strong>{strMeal}</strong> from {strCategory} category.
        </div>
        <br />
        <div>Please, follow the instructions to cook {strMeal}:</div>
        <br />
        <div>{strInstructions}</div>
        <br />
      </>
    );
  }
}
