import React from 'react';
import Recipe from './Recipe';

export default function RandomRecipeResults({
  randomRecipe,
  isDataLoading,
  error,
  addToLikedList,
}) {
  if (randomRecipe === undefined || Object.keys(randomRecipe).length === 0) {
    return null;
  }
  if (isDataLoading) {
    return <div>Loading ...</div>;
  }

  if (error !== null) {
    return <div>Some error occured... 😩</div>;
  }

  return (
    <>
      <>{Recipe(randomRecipe)} </>
      <br />
      <button onClick={e => addToLikedList(randomRecipe.strMeal)}>Click to like</button>
      <br />
    </>
  );
}
