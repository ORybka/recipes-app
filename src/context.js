import { createContext, useContext } from './framework';

export const RecipeContext = createContext({});
export const useRecipeContext = () => useContext(RecipeContext);
