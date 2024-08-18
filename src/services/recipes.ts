import { Recipe, registerRecipeFormData } from '../types/recipe';
import { api } from './api';

export const saveRecipe = async (recipe: registerRecipeFormData) => {
  const response = await api.post<Recipe>('/recipes', recipe);
  console.log('🚀 ~ saveRecipe ~ response:', response);

  return response;
};
