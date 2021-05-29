/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import RenderRandomBtn from './RandomButton';
import RenderRandomRecipe from './RandomRecipe';
import SearchByDish from './SearchByDish';
import RecipeResults from './RecipeResults';

export default function App() {
  return (
    <>
      <RenderRandomBtn />
      <RenderRandomRecipe />
      <SearchByDish />
      <RecipeResults />
    </>
  );
}
