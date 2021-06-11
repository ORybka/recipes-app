function getRecipe(recipeName) {
  return `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`;
}
function getRandomURL() {
  return 'https://www.themealdb.com/api/json/v1/1/random.php';
}

export { getRecipe, getRandomURL };
