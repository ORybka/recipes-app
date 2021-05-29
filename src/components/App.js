/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import RenderRandomBtn from './RandomButton';
import RenderRandomRecipe from './RandomRecipe';
import SearchByDish from './SearchByDish';
import RecipeResults from './RecipeResults';
import { showLikedRecipesButton } from './ShowLikedRecipes';

export default function App() {
  return (
    <>
      <RenderRandomBtn />
      <br />
      <RenderRandomRecipe />
      <br />
      <SearchByDish />
      <br />
      <RecipeResults />
      <br />
      <>{showLikedRecipesButton()}</>
    </>
  );
}
