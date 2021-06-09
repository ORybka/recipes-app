/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import { useState, useEffect } from '../framework/hooks';
import RenderRandomBtn from './RandomButton';
import GetRandomRecipe from '../data/randomRecipesData';

export default function App() {
  const [error, setError] = useState(null);
  const [isDataLoading, setDataLoading] = useState(true);
  const [randomRecipe, setRandomRecipe] = useState({});

  useEffect(() => {
    GetRandomRecipe()
      .then(({ response, results }) => {
        const { message, code } = response;
        if (code !== '200' && message) throw Error(message);
        setError(null);
        setRandomRecipe(results);
      })
      .catch(setError)
      .finally(setDataLoading(false));
  }, [randomRecipe]);

  return (
    <>
      <RenderRandomBtn data={randomRecipe} />
      <br />
    </>
  );
}
