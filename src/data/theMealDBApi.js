const recipesData = {};
const allowedRecipes = ['Pizza Express Margherita', 'Mediterranean Pasta Salad', 'Banana Pancakes'];
function getRecipe(recipeName) {
  return `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`;
}
function getRandomURL() {
  return 'https://www.themealdb.com/api/json/v1/1/random.php';
}

export { recipesData, allowedRecipes, getRecipe, getRandomURL };
