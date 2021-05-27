import renderRecipe from './Recipe';
import { showLikedRecipesButton } from './ShowLikedRecipes';

export default function RecipeResults() {
  const { currentRecipe, isDataLoading, error } = window.dataStore;
  let content = '';
  if (currentRecipe === '') {
    content = 'Please, choose the recipe from the list or try your luck and get random one :)';
  } else {
    if (isDataLoading) {
      content = 'Loading ...';
    }

    if (error !== null) {
      content = error;
    }

    // if (isCurrentRecipeDataLoaded()) {
    content = `
      ${renderRecipe()}
      <br>
      ${showLikedRecipesButton()}
      `;
    // }
  }

  return `<div>${content}</div>`;
}
