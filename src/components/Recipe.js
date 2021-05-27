import addLikeButton from './LikeButton';

function getCurrentRecipeData() {
  const { currentRecipe, recipeList } = window.dataStore;
  return recipeList[currentRecipe];
}

export default function renderRecipe() {
  const { currentRecipe } = window.dataStore;
  const recipeData = getCurrentRecipeData();
  let content = '';

  if (recipeData) {
    const { strInstructions } = recipeData[0];

    content += `<div><h3>${currentRecipe}</h3></div>`;
    content += `<div>${strInstructions}</div><br>`;
    content += `${addLikeButton(currentRecipe)}`;
  }
  return content ? `<div>${content}</div>` : '';
}
