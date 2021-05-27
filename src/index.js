import renderApp from './framework/render';
import performSearch from './data/recipesData';
import GetRandomRecipe from './data/randomRecipesData';
import dataStore from './data/dataStore';
import App from './components/App';
import { showList } from './components/ShowLikedRecipes';
import addLikedRecipe from './components/LikeRecipe';

let likedRecipe = [];
window.GetRandomRecipe = GetRandomRecipe;
window.likedRecipe = likedRecipe;
window.renderApp = renderApp;
window.showList = showList;
window.performSearch = performSearch;
window.addLikedRecipe = addLikedRecipe;

renderApp(App, 'app-root');
