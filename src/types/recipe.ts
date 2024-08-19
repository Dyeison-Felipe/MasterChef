import { z } from 'zod';
import { registerRecipeSchema } from '../validations/schemas';
import { RecipeCategory } from '../enums/recipe';

export type registerRecipeFormData = z.infer<typeof registerRecipeSchema> & {
  category: RecipeCategory;
};

export type Recipe = registerRecipeFormData & {
  id: string;
};
