/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment, useState } from '../framework';
import { RecipeContext } from '../context';
import RenderRandomBtn from './RandomButton';
import RandomRecipeResults from './RandomRecipeResults';
import SearchByDish from './SearchByDish';
import RecipeResults from './RecipeResults';
import { showLikedRecipesButton, ShowLikedRecipes } from './ShowLikedRecipes';
import { useRecipes } from '../customHooks';

export default function App() {
  const {
    isDataLoading,
    setDataLoading,
    error,
    randomRecipe,
    currentRecipe,
    setCurrentRecipe,
    recipeList,
  } = useRecipes();
  const [likedList, setLikedList] = useState([]);

  const addToLikedList = recipe => {
    if (!likedList.includes(recipe)) {
      setLikedList([...likedList, recipe]);
    }
  };

  return (
    <>
      <RenderRandomBtn randomRecipe={randomRecipe} setReload={setDataLoading} />
      <RandomRecipeResults
        randomRecipe={randomRecipe}
        isDataLoading={isDataLoading}
        error={error}
        addToLikedList={addToLikedList}
      />
      <br />
      <br />
      <SearchByDish onChange={setCurrentRecipe} />
      <br />
      <RecipeContext.Provider value={recipeList}>
        {!currentRecipe ? (
          <div>Please, choose the recipe from the list or try your luck and get random one</div>
        ) : (
          <RecipeResults
            isDataLoading={isDataLoading}
            error={error}
            addToLikedList={addToLikedList}
          />
        )}
      </RecipeContext.Provider>

      <br />
      <>{showLikedRecipesButton()}</>
      <ShowLikedRecipes likedList={likedList} />
    </>
  );
}
