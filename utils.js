export const recipesData = {};
export const allowedRecipes = ['Pizza Express Margherita', 'Mediterranean Pasta Salad', 'Pancakes'];
export function getRecipe(recipeName) {
  return `www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`;
}
