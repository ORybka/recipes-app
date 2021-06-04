import { getRandomURL } from './theMealDBApi';
import renderApp from '../framework/render';

export default async function GetRandomRecipe() {
  const url = getRandomURL();
  window.dataStore.error = null;
  window.dataStore.isDataLoading = true;

  try {
    window.dataStore.isDataLoading = false;
    const response = await fetch(url);

    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      const results = await response.json();
      window.dataStore.randomRecipe = results.meals[0];
      window.dataStore.recipeList[results.meals[0].strMeal] = results.meals;
    }
  } catch (e) {
    window.dataStore.error = 'Some error ocurred...';
  } finally {
    renderApp();
  }
}
