import { useForm } from 'react-hook-form';
import { registerRecipeFormData } from '../../types/recipe';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ingredientSchema,
  registerRecipeSchema,
} from '../../validations/schemas';
import { useRef } from 'react';
import { saveRecipe } from '../../services/recipes';
import { toast } from 'react-toastify';
import { RecipeCategory } from '../../enums/recipe';

export const useRegisterRecipe = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
    setValue,
    setError,
    watch,
    reset,
  } = useForm<registerRecipeFormData>({
    resolver: zodResolver(registerRecipeSchema),
    defaultValues: {
      cookingTime: '',
      description: '',
      ingredients: [],
      name: '',
      preparationMethod: '',
      category: RecipeCategory.candy,
      serving: '',
    },
  });

  const ingredientInputRef = useRef<HTMLInputElement>(null);

  const ingredients = watch('ingredients');

  const handleAddIngredient = () => {
    const ingredient = ingredientInputRef.current?.value ?? '';

    const formatedIngredient = { name: ingredient };
    const isIngredientValid = ingredientSchema.safeParse(formatedIngredient);

    setError('ingredients', {
      message: isIngredientValid.error?.errors[0].message,
    });

    if (isIngredientValid.success) {
      setValue('ingredients', [...ingredients, formatedIngredient]);
      if (ingredientInputRef.current) {
        ingredientInputRef.current.value = '';
      }
    }
  };

  const handleSubmitForm = async (data: registerRecipeFormData) => {
    console.log('🚀 ~ handleSubmitForm ~ data:', data);
    try {
      await saveRecipe(data);
      reset();
      toast.success('Receita adicionada com sucesso.');
    } catch (error) {
      console.log('🚀 ~ handleSubmitForm ~ error:', error);
      toast.error('Desculpe. Houve um erro ao adicionar a receita.');
    }
  };

  const handleRemoveIngredient = (ingredientIndex: number) => {
    const filteredIngredients = ingredients.filter(
      (_, index) => index !== ingredientIndex,
    );

    setValue('ingredients', filteredIngredients);
  };

  return {
    errors,
    ingredientInputRef,
    ingredients,
    handleRemoveIngredient,
    register,
    handleSubmit,
    handleAddIngredient,
    handleSubmitForm,
  };
};
