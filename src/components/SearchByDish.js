/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import { allowedRecipes } from '../data/theMealDBApi';
import performSearch from '../data/recipesData';

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
        onchange={e => performSearch(e.target.value)}
        autocomplete="off"
      />
      <datalist id="recipe-list">{optionList}</datalist>
      <br />
      <br />
    </>
  );
}
