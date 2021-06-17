import React, { useState } from 'react';
import style from './LikedRecipesButton.css';

export default function LikedRecipesButton({ likedList }) {
  const [showLikedList, setShowLikedList] = useState(false);
  const showList = () => setShowLikedList(true);
  const closeList = () => setShowLikedList(false);
  return (
    <>
      <button onClick={showList}>Click to see your favorite recipes</button>
      <button onClick={closeList}>Hide favorite recipes</button>
      <div className={showLikedList ? style.show : style.hide}>
        <h3>List of your favorite recipes:</h3>
        <div id="liked-list">{likedList.join(', ')}</div>
      </div>
    </>
  );
}
