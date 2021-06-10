/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import { allowedRecipes } from '../data/theMealDBApi';

export default function SearchByDish({ onChange }) {
  // const optionList = [];
  // allowedRecipes.forEach(el => optionList.push(<option value={el}></option>));

  return (
    <>
      <input type="text" placeholder="Choose recipe" onChange={e => onChange(e.target.value)} />
      <br />
    </>
  );
}

// return (
//   <>
//     <input
//       type="search"
//       id="search-recipe-input"
//       list="recipe-list"
//       placeholder="Choose recipe"
//       onChange={e => onChange(e.target.value)}
//       autocomplete="off"
//     />
//     <datalist id="recipe-list">{optionList}</datalist>
//     <br />
//     <br />
//   </>
// );
