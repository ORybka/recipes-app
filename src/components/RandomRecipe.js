import React from 'react';
import Recipe from './Recipe';

export default function RandomRecipe({ randomRecipe, addToLikedList }) {
  return (
    <>
      <>{Recipe(randomRecipe)} </>
      <br />
      <button onClick={e => addToLikedList(randomRecipe.strMeal)}>Click to like</button>
      <br />
    </>
  );
}
