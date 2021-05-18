export const recipesData = {};
export const allowedRecipes = [
  'Pizza Express Margherita',
  'Mediterranean Pasta Salad',
  'Banana Pancakes',
];
export function getRecipe(recipeName) {
  return `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`;
}
