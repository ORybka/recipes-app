export default function addLikeButton(recipe) {
  const { currentRecipe, randomRecipe } = window.dataStore;
  window.likedRecipe = recipe;

  if (currentRecipe === recipe) {
    return `
    <button id="like-recipe-btn" onclick="addLikedRecipe(likedRecipe); window.renderApp();">Click to add this recipe<br>to your favorite</button>`;
  } else if (randomRecipe.strMeal === recipe) {
    return `
    <button id="like-random-btn" onclick="addLikedRecipe(likedRecipe); window.renderApp();">Click to add this recipe<br>to your favorite</button>`;
  }
}
