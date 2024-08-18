import { z } from 'zod';
import { onlyLettersRegex } from './regex';

const requiredCommonField = (requiredMessage: string) =>
  z.string({ required_error: requiredMessage }).trim().min(1, requiredMessage);

const cookingTimePatterValidation = (value: string) => {
  const words = value.split(' ');

  const [time, unitOfMeasurement] = words;
  return (
    words.length === 2 && // Deve conter exatamente duas palavras
    !isNaN(+time) && // A primeira palavra deve ser um número
    Number(time) > 0 && // O número deve ser positivo
    onlyLettersRegex.test(unitOfMeasurement) // A segunda palavra deve conter apenas letras
  );
};

const servingPatterValidation = (value: string) => {
  const words = value.split(' ');

  const [time] = words;

  return (
    words.length >= 2 && // Deve conter pelo menos duas palavras
    !isNaN(+time) && // A primeira palavra deve ser um número
    Number(time) > 0 // O número deve ser positivo
  );
};

export const ingredientSchema = z.object({
  name: requiredCommonField('O ingrediente é obrigatório.'),
});

export const registerRecipeSchema = z.object({
  name: requiredCommonField('O nome é obrigatório.'),
  description: requiredCommonField('A descrição é obrigatória.'),
  preparationMethod: requiredCommonField('O modo de preparo é obrigatório.'),
  cookingTime: requiredCommonField(
    'O tempo de cozimento é obrigatório.',
  ).refine(cookingTimePatterValidation, {
    message: 'Tempo de cozimento inválido.',
  }),
  serving: requiredCommonField('As porções são obrigatórias.').refine(
    servingPatterValidation,
    {
      message: 'Porções inválidas.',
    },
  ),
  ingredients: z
    .array(ingredientSchema, {
      required_error: 'A receita precisa ter pelo menos um ingrediente.',
    })
    .min(1, 'A receita precisa ter pelo menos um ingrediente.'),
});
