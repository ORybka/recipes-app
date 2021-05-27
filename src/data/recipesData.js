import { getRecipe } from './theMealDBApi';

export default async function performSearch(recipeName) {
  const url = getRecipe(recipeName);
  window.dataStore.currentRecipe = recipeName;
  window.dataStore.error = null;
  window.dataStore.isDataLoading = true;

  try {
    window.dataStore.isDataLoading = false;
    const response = await fetch(url);
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      const results = await response.json();
      window.dataStore.recipeList[recipeName] = results.meals;
    }
  } catch (e) {
    window.dataStore.error = 'Some error ocurred...';
  } finally {
    renderApp();
  }
}
