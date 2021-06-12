import React from 'react';
function showLikedRecipesButton() {
  return (
    <>
      <button id="show-btn" onClick={showList}>
        Click to see your favorite recipes
      </button>
    </>
  );
}

function ShowLikedRecipes({ likedList }) {
  if (likedList) {
    return (
      <>
        <div id="liked-title" style={{ display: 'none' }}>
          <h3>List of your favorite recipes:</h3>
        </div>
        <div id="liked-list" style={{ display: 'none' }}>
          {likedList.map(el => el + ', ')}
        </div>
      </>
    );
  }
}

function showList() {
  const elemArr = [document.querySelector('#liked-title'), document.querySelector('#liked-list')];
  elemArr.map(el => {
    el.style.display === 'block' ? (el.style.display = 'none') : (el.style.display = 'block');
  });
}

export { showLikedRecipesButton, ShowLikedRecipes, showList };
