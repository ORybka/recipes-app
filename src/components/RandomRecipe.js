import addLikeButton from './LikeButton';

export default function RenderRandomRecipe() {
  const { randomRecipe } = window.dataStore;
  let content = '';

  const { strMeal, strCategory, strInstructions } = randomRecipe;
  if (Object.keys(randomRecipe).length === 0 && randomRecipe.constructor === Object) {
    content = '';
  } else {
    content += `<div>Your meal today is ${strMeal} from ${strCategory} category.</div><br>`;
    content += `<div>Please, follow the instructions to cook ${strMeal}:</div><br>`;
    content += `<div>${strInstructions}</div><br>`;
    content += `${addLikeButton(strMeal)}`;
  }

  return `<div>${content}</div>`;
}
