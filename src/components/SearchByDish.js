/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import { allowedRecipes } from '../data/theMealDBApi';

export default function SearchByDish() {
  const optionList = [];
  allowedRecipes.forEach(el => optionList.push(<option value={el}></option>));

  return (
    <>
      <input
        type="search"
        id="search-recipe-input"
        list="recipe-list"
        placeholder="Choose recipe"
        onchange={e => window.performSearch(e.target.value)}
        autocomplete="off"
      />
      <datalist id="recipe-list">{optionList}</datalist>
      <br />
      <br />
    </>
  );
}
