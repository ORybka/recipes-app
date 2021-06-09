import { getRandomURL } from './theMealDBApi';

export default async function GetRandomRecipe() {
  const url = getRandomURL();
  const response = await fetch(url);
  const results = await response.json();
  return Promise.resolve({ response, results });
}
