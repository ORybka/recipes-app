import React from 'react';
import renderRandomRecipe from './RandomRecipe';

export default function RandomRecipeResults({
  randomRecipe,
  isDataLoading,
  error,
  addToLikedList,
}) {
  if (
    randomRecipe === undefined ||
    (Object.keys(randomRecipe).length === 0 && randomRecipe.constructor === Object)
  ) {
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
      <>{renderRandomRecipe(randomRecipe)} </>
      <br />
      <button onClick={e => addToLikedList(randomRecipe.strMeal)}>Click to like</button>
      <br />
    </>
  );
}
