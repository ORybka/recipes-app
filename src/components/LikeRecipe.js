export default function addLikedRecipe(recipe) {
  const { likedArr } = window.dataStore;
  if (!likedArr.includes(recipe)) {
    likedArr.push(recipe);
  }
  // console.log('likedRecipes: ', likedArr);
}
