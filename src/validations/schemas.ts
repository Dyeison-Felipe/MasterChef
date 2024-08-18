import { z } from 'zod';
import { onlyLettersRegex } from './regex';

const requiredCommonField = (requiredMessage: string) =>
  z.string({ required_error: requiredMessage }).min(1, requiredMessage).trim();

const valueMeasurement = (value: string) => {
  const words = value.split(' ');

  const [time, unitOfMeasurement] = words;
  return (
    words.length === 2 && // Deve conter exatamente duas palavras
    !isNaN(+time) && // A primeira palavra deve ser um número
    Number(time) > 0 && // O número deve ser positivo
    onlyLettersRegex.test(unitOfMeasurement) // A segunda palavra deve conter apenas letras
  );
};

export const ingredientSchema = z.object({
  name: requiredCommonField('O ingrediente é obrigatório.'),
});

export const registerRecipeSchema = z.object({
  name: requiredCommonField('O nome é obrigatório.'),
  description: requiredCommonField('A descrição é obrigatório.'),
  preparationMethod: requiredCommonField('O modo de preparo é obrigatório.'),
  cookingTime: requiredCommonField(
    'O tempo de cozimento é obrigatório.',
  ).refine(valueMeasurement, {
    message: 'Tempo de cozimento inválido.',
  }),
  serving: requiredCommonField('Aa porções são obrigatórias.').refine(
    valueMeasurement,
    {
      message: 'Porções inválidas.',
    },
  ),
  ingredients: z
    .array(ingredientSchema)
    .min(1, 'A receita precisa ter pelo menos um ingrediente.'),
});
