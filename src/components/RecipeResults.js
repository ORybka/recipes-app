/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import renderRecipe from './Recipe';

export default function RecipeResults({ currentRecipe, recipeList, isDataLoading, error }) {
  if (currentRecipe === '') {
    return <div>Please, choose the recipe from the list or try your luck and get random one</div>;
  } else {
    if (isDataLoading) {
      return <div>Loading ...</div>;
    }

    if (error !== null) {
      return <div>{error}</div>;
    }

    return (
      <>
        <>{renderRecipe(recipeList)} </>
      </>
    );
  }
}
