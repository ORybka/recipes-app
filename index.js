import { Recipe } from './recipesList';
import { allowedRecipes, getRecipe } from './utils';

window.dataStore = {
  currentRecipe: '',
  isDataLoading: false,
  error: null,
  recipeList: {},
  likedRecipe: '',
};

let likedRecipe;
window.GetRandomRecipe = GetRandomRecipe;
window.likedRecipe = likedRecipe;
window.renderApp = renderApp;
window.showList = showList;
window.performSearch = performSearch;
const RECIPES_NUM = 3;

renderApp();

function renderApp() {
  document.getElementById('app-root').innerHTML = `
        ${App()}
    `;
}

function RecipeResults() {
  const { currentRecipe, isDataLoading, error } = window.dataStore;
  let content = '';
  if (currentRecipe === '') {
    content = 'Search by recipe name';
  } else {
    if (isDataLoading) {
      content = 'Loading ...';
    }

    if (error !== null) {
      content = error;
    }

    // if (isCurrentRecipeDataLoaded()) {
    content = `
      ${renderRecipe()}
      <br>
      ${showLikedRecipesButton()}
      `;
    // }
  }

  return `<div>${content}</div>`;
}

function App() {
  return `
  <div>
    ${RenderBtn()}
    <br>
    ${SearchByDish()}
    <br>
    ${RecipeResults()}
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

function isCurrentRecipeDataLoaded() {
  return Boolean(getCurrentRecipeData());
}

async function performSearch(recipeName) {
  const url = getRecipe(recipeName);
  window.dataStore.currentRecipe = recipeName;
  window.dataStore.error = null;
  window.dataStore.isDataLoading = true;

  try {
    window.dataStore.isDataLoading = false;
    const response = await fetch(url);
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      const results = await response.json();
      window.dataStore.recipeList[recipeName] = results.meals;
    }
  } catch (e) {
    window.dataStore.error = 'Some error ocurred...';
  } finally {
    renderApp();
  }
}

function SearchByDish() {
  const optionList = [];
  allowedRecipes.forEach(el => optionList.push(`<option value="${el}"></option>`));

  return `
    <input 
      type="search" 
      id="search-recipe-input" 
      list="recipe-list" placeholder="Choose recipe" 
      onchange="window.performSearch(this.value)" 
      autocomplete="off"
    >
    <datalist id="recipe-list">
    ${optionList}
    </datalist>
    <br><br>
  `;
}

function getCurrentRecipeData() {
  const { currentRecipe, recipeList } = window.dataStore;
  return recipeList[currentRecipe];
}

function renderRecipe() {
  const { currentRecipe } = window.dataStore;
  const recipeData = getCurrentRecipeData();
  let content = '';

  if (recipeData) {
    const { strInstructions } = recipeData[0];

    content += `<div><h3>${currentRecipe}</h3></div>`;
    content += `<div>${strInstructions}</div><br>`;
    content += `${addLikeButton(currentRecipe)}`;
  }
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
