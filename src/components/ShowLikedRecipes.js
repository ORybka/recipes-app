/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';

function showLikedRecipesButton() {
  return (
    <>
      <button id="show-btn" onclick={showList}>
        Click to see your favorite recipes
      </button>
      <ShowLikedRecipes />
    </>
  );
}

function ShowLikedRecipes() {
  let content = null;
  window.dataStore.likedArr.forEach(el => (content += el));
  return (
    <>
      <div id="liked-title" class="_hidden_7ad08">
        <h3>List of your favorite recipes:</h3>
      </div>
      <div id="liked-list" class="_hidden_7ad08">
        {content}
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
