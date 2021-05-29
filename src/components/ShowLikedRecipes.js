/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';

function showLikedRecipesButton() {
  return (
    <>
      <button id="show-btn" onclick={showList}>
        Click to see your favorite recipes
      </button>
      <>{ShowLikedRecipes()}</>
    </>
  );
}

function ShowLikedRecipes() {
  const { likedArr } = window.dataStore;
  return (
    <>
      <div id="liked-title" style="display: none">
        <h3>List of your favorite recipes:</h3>
      </div>
      <div id="liked-list" style="display: none">
        {likedArr.map(el => el + ', ')}
      </div>
    </>
  );
}

function showList() {
  const elemArr = [document.querySelector('#liked-title'), document.querySelector('#liked-list')];
  elemArr.map(el => {
    el.style.display === 'block' ? (el.style.display = 'none') : (el.style.display = 'block');
  });
}

export { showLikedRecipesButton, ShowLikedRecipes, showList };
