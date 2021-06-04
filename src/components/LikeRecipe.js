import renderApp from '../framework/render';

export default function addLikedRecipe(recipe) {
  const { likedArr } = window.dataStore;
  if (!likedArr.includes(recipe)) {
    likedArr.push(recipe);
  }
  renderApp();
}
