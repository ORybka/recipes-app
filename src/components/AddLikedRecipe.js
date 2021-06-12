/** @jsx createElement */
/** @jsxFrag createFragment */
import { useState } from '../framework';

export default function addToLikedList(recipe) {
  const [likedList, setLikedList] = useState([]);

  if (!likedList.includes(recipe)) {
    setLikedList([...likedList, recipe]);
  }
}
