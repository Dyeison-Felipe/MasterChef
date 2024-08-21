import { FaPlus } from 'react-icons/fa6';
import { useRegisterRecipe } from './useRegisterRecipe';
import { Input } from '../../components/Input';
import { RecipeCategory } from '../../enums/recipe';
import { MdDelete } from 'react-icons/md';

export default function RegisterRecipe() {
  const {
    errors,
    ingredientInputRef,
    ingredients,
    handleRemoveIngredient,
    handleAddIngredient,
    handleSubmit,
    handleSubmitForm,
    register,
  } = useRegisterRecipe();

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="w-[40rem] max-sm:px-2 max-sm:w-full mx-auto my-8
         bg-zinc-100 p-8 rounded-xl shadow-md flex flex-col gap-4"
      >
        <Input.Root
          label="Nome"
          helperText={errors.name?.message}
          htmlFor="name"
        >
          <Input.Field {...register('name')} id="name" />
        </Input.Root>

        <Input.Root
          label="Descrição"
          helperText={errors.description?.message}
          htmlFor="description"
        >
          <Input.Textarea
            {...register('description')}
            id="description"
            rows={3}
          />
        </Input.Root>

        <Input.Root
          label="Modo de Preparo"
          helperText={errors.preparationMethod?.message}
          htmlFor="preparation-method"
        >
          <Input.Textarea
            rows={3}
            {...register('preparationMethod')}
            id="preparation-method"
          />
        </Input.Root>

        <Input.Root
          label="Tempo de Cozimento"
          helperText={errors.cookingTime?.message}
          htmlFor="cooking-time"
        >
          <Input.Field
            {...register('cookingTime')}
            id="cooking-time"
            placeholder="Ex.: 10 minutos"
          />
        </Input.Root>

        <Input.Root
          label="Porções"
          helperText={errors.serving?.message}
          htmlFor="serving"
        >
          <Input.Field
            {...register('serving')}
            id="serving"
            placeholder="Ex.: 1 tigela média (aproximadamente 250ml)"
          />
        </Input.Root>

        <Input.Root label="Categoria" helperText={errors.category?.message}>
          <select {...register('category')} className="field">
            <option value={RecipeCategory.candy}>Doces</option>
            <option value={RecipeCategory.salty}>Salgados</option>
            <option value={RecipeCategory.pizza}>Pizza</option>
            <option value={RecipeCategory.bread}>Pães</option>
            <option value={RecipeCategory.dessert}>Sobremesa</option>
          </select>
        </Input.Root>

        <Input.Root
          label="Ingredientes"
          helperText={errors.ingredients?.message}
          htmlFor="ingredients"
        >
          <div className="w-full flex items-center gap-2">
            <Input.Field id="ingredients" ref={ingredientInputRef} />
            <FaPlus
              className="cursor-pointer"
              size={24}
              onClick={handleAddIngredient}
            />
          </div>
        </Input.Root>

        <ul className="list-disc ml-5 flex flex-col gap-2 max-sm:gap-4">
          {ingredients.map((ingredient, index) => (
            <li key={`${ingredient.name}${index}`} className="w-full list-item">
              <div className="flex justify-between items-center">
                <span>{ingredient.name}</span>
                <MdDelete
                  className="cursor-pointer"
                  size={20}
                  onClick={() => handleRemoveIngredient(index)}
                />
              </div>
            </li>
          ))}
        </ul>

        <button
          type="submit"
          className="bg-cyan-500 text-zinc-100 px-4 py-2 rounded-md mt-4"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
