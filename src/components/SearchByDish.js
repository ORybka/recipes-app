import { allowedRecipes } from '../data/theMealDBApi';

export default function SearchByDish() {
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
