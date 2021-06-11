import { getRecipe } from './theMealDBApi';
const dataStore = {};

export default async function performSearch(recipeName) {
  const recipeNameData = dataStore[recipeName];
  if (recipeNameData) return recipeNameData;

  const url = getRecipe(recipeName);
  return fetch(url).then(response => {
    const result = response.json();
    dataStore[recipeName] = result;
    return result;
  });
}
