/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import renderRecipe from './Recipe';
import { showLikedRecipesButton } from './ShowLikedRecipes';

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
        <h3>{currentRecipe}</h3>
        <renderRecipe recipe={currentRecipe} />
        <br />
        <showLikedRecipesButton />
      </>
    );
  }

  return <p>{content}</p>;
}
