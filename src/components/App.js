import RenderRandomBtn from './RandomButton';
import RenderRandomRecipe from './RandomRecipe';
import SearchByDish from './SearchByDish';
import RecipeResults from './RecipeResults';

export default function App() {
  return `
  <div>
    ${RenderRandomBtn()}
    <br>
    ${RenderRandomRecipe()}
    <br>
    ${SearchByDish()}
    <br>
    ${RecipeResults()}
  </div>
  `;
}
