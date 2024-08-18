import { useForm } from 'react-hook-form';
import { registerRecipeFormData } from '../../types/registerRecipe';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerRecipeSchema } from '../../validations/schemas';

export const useRegisterRecipe = () => {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<registerRecipeFormData>({
    resolver: zodResolver(registerRecipeSchema),
  });

  const handleAddIngredient = () => {};

  const handleSubmitForm = ({}: registerRecipeFormData) => {};

  return {
    errors,
    register,
    handleSubmit,
    handleAddIngredient,
    handleSubmitForm,
  };
};
