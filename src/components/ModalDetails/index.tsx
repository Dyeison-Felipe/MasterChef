import { ModalDetailsProps } from "../../types/modalDetailsProps";
import { FaWindowClose } from "react-icons/fa";

export default function ModalDetails({
  closeModal,
  recipe,
}: ModalDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-md w-5/12 max-h-7/12">
        <FaWindowClose onClick={closeModal} className="text-2xl" />
        <div className="flex items-center justify-between text-center">
          <h1 className="text-2xl font-bold mb-4">{recipe.name}</h1>
        </div>
        <p className="mb-4">
          <strong>Descrição:</strong> {recipe.description}
        </p>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Ingredientes:</h3>
          <ul className="list-disc pl-5">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient.name}</li>
            ))}
          </ul>
        </div>
        <p className="mb-4">
          <strong>Modo de preparo:</strong> {recipe.preparationMethod}
        </p>
        <p className="mb-4">
          <strong>Tempo de preparo:</strong> {recipe.cookingTime}
        </p>
        <p className="mb-4">
          <strong>Rendimento:</strong> {recipe.serving}
        </p>
      </div>
    </div>
  );
}
