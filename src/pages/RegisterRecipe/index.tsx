import { FaPlus } from 'react-icons/fa6';
import { useRegisterRecipe } from './useRegisterRecipe';
import { Input } from '../../components/Input';

export default function RegisterRecipe() {
  const {
    errors,
    handleAddIngredient,
    handleSubmit,
    handleSubmitForm,
    register,
  } = useRegisterRecipe();

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="w-[40rem] mx-auto my-8 bg-zinc-100 p-8 rounded-xl shadow-md flex flex-col gap-4"
      >
        <Input.Root label="Nome" htmlFor="name">
          <Input.Field {...register('name')} id="name" />
        </Input.Root>

        <Input.Root label="Descrição" htmlFor="description">
          <Input.Textarea
            {...register('description')}
            id="description"
            rows={3}
          />
        </Input.Root>

        <Input.Root label="Modo de Preparo" htmlFor="preparation-method">
          <Input.Textarea
            rows={3}
            {...register('preparationMethod')}
            id="preparation-method"
          />
        </Input.Root>

        <Input.Root label="Tempo de Cozimento" htmlFor="cooking-time">
          <Input.Field {...register('cookingTime')} id="cooking-time" />
        </Input.Root>

        <Input.Root label="Porções" htmlFor="serving">
          <Input.Field {...register('serving')} id="serving" />
        </Input.Root>

        <Input.Root label="Ingredientes" htmlFor="ingredients">
          <div className="w-full flex items-center gap-2">
            <Input.Field {...register('ingredients')} id="ingredients" />
            <FaPlus className="cursor-pointer" size={24} />
          </div>
        </Input.Root>

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
