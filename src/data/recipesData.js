import { getRecipe } from './theMealDBApi';

export default async function performSearch(recipeName) {
  const url = getRecipe(recipeName);
  const response = await fetch(url);
  const results = await response.json();
  return Promise.resolve({ response, results });
}
