import { z } from 'zod';
import { registerRecipeSchema } from '../validations/schemas';

export type registerRecipeFormData = z.infer<typeof registerRecipeSchema>;
