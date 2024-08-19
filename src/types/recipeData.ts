import { IngredientRecipie } from "./ingredientRecipe";

export type RecipieData = {
  id: string;
  name: string;
  description: string;
  preparationMethod: string;
  cookingTime: string;
  serving:string;
  category: string;
  ingredients: IngredientRecipie[];
}