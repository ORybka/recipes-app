/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import renderRecipe from './Recipe';

export default function RecipeResults() {
  const { currentRecipe, isDataLoading, error } = window.dataStore;
  let content = null;
  if (currentRecipe === '') {
    content = 'Please, choose the recipe from the list or try your luck and get random one :)';
  } else {
    if (isDataLoading) {
      content = 'Loading ...';
    }

    if (error !== null) {
      content = error;
    }

    content = (
      <>
        <>{renderRecipe(currentRecipe)} </>
      </>
    );
  }

  return <p>{content}</p>;
}
