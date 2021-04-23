import { Recipe } from './recipesList';

window.dataStore = {
  currentRecipe: '',
  likedRecipe: '',
};

let likedRecipe;
window.GetRandomRecipe = GetRandomRecipe;
window.likedRecipe = likedRecipe;
window.renderApp = renderApp;
window.showList = showList;
const RECIPES_NUM = 3;

renderApp();

function renderApp() {
  document.getElementById('app-root').innerHTML = `
        ${App()}
    `;
}

function App() {
  return `
  <div>
    ${RenderBtn()}
    <br>
    ${SearchByDish()}
    <br>
    ${renderRecipe()}
    <br>
    ${showLikedRecipesButton()}
  </div>
  `;
}

function RenderBtn() {
  return `
    <button id="random-recipe-btn" onclick="window.GetRandomRecipe(); window.renderApp();">Click to get a recipe</button>
    <br>
    <div>${GetRandomRecipe()}</div>
  `;
}

function GetRandomRecipe() {
  let content = '';
  const index = Math.floor(Math.random() * RECIPES_NUM);
  const recipeData = Recipe.meals[index];
  const { strMeal, strCategory, strInstructions } = recipeData;

  content += `<div>Your meal today is ${strMeal} from ${strCategory} category.</div><br>`;
  content += `<div>Please, follow the instructions to cook ${strMeal}:</div><br>`;
  content += `<div>${strInstructions}</div><br>`;

  return `<div>${content}</div>`;
}

function SearchByDish() {
  const recipeData = window.dataStore.currentRecipe;

  const recipesList = [];
  const optionList = [];
  Recipe.meals.forEach(el => recipesList.push(el.strMeal));
  recipesList.forEach(el => optionList.push(`<option value="${el}"></option>`));

  return `
    <input 
      type="search" 
      id="search-recipe-input" 
      list="recipe-list" placeholder="Choose recipe" 
      onchange="window.dataStore.currentRecipe = this.value; window.renderApp();" 
      autocomplete="off"
    >
    <datalist id="recipe-list">
      ${!recipeData ? `${optionList}` : ''}
    </datalist>
    <br><br>
  `;
}

function renderRecipe() {
  const { currentRecipe } = window.dataStore;
  let content = '';

  Recipe.meals.forEach(recipeName => {
    if (currentRecipe === recipeName.strMeal) {
      let index;
      for (let i = 0; i < Recipe.meals.length; i++) {
        const el = Recipe.meals[i];
        if (el.strMeal === recipeName.strMeal) {
          index = i;
        }
      }

      const recipeData = Recipe.meals[index];
      const { strInstructions } = recipeData;

      content += `<div><h3>${recipeName.strMeal}</h3></div>`;
      content += `<div>${strInstructions}</div><br>`;
      content += `${addLikeButton(recipeName.strMeal)}`;
    }
  });
  return `<div>${content}</div>`;
}

function addLikeButton(recipe) {
  window.likedRecipe = recipe;
  return `
  <button id="like-recipe-btn" onclick="window.dataStore.likedRecipe = likedRecipe; window.renderApp();">Click to add this recipe<br>to your favorite</button>`;
}

function showLikedRecipesButton() {
  let content = '';
  content += `<button id="show-btn" onclick="window.showList();">Click to see your favorite recipes</button>`;
  content += `<div>${ShowLikedRecipes()}</div>`;
  return `<div>${content}</div>`;
}

function ShowLikedRecipes() {
  return `
    <div id="liked-title" class="_hidden_7ad08"><h3>List of your favorite recipes:</h3></div>
    <div id="liked-list" class="_hidden_7ad08">${window.dataStore.likedRecipe}</div>`;
}

function showList() {
  const elemArr = [document.querySelector('#liked-title'), document.querySelector('#liked-list')];
  elemArr.map(el => {
    el.style.display === 'block' ? (el.style.display = 'none') : (el.style.display = 'block');
  });
}
