import React, { useState } from 'react';
import { getRandomURL } from '../data/theMealDBApi';
import RandomRecipe from './RandomRecipe';

export default function RandomRecipeResults({ addToLikedList }) {
  const [randomRecipe, setRandomRecipe] = useState({});
  const [error, setError] = useState(null);
  const [isDataLoading, setDataLoading] = useState(false);

  const getRandomRecipe = async () => {
    const url = getRandomURL();
    setDataLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      } else {
        setDataLoading(false);
        const results = await response.json();
        setRandomRecipe(results.meals[0]);
      }
    } catch (e) {
      setError(e);
      setDataLoading(false);
    }
  };

  return (
    <div>
      <button onClick={() => getRandomRecipe()}>Click to get a recipe</button>

      {!isDataLoading && error ? (
        <div>
          <p>Some error occured... 😩</p>
        </div>
      ) : null}
      {randomRecipe ? (
        <>
          <RandomRecipe
            randomRecipe={randomRecipe}
            isDataLoading={isDataLoading}
            error={error}
            addToLikedList={addToLikedList}
          />
          <br />
        </>
      ) : null}
    </div>
  );
}
