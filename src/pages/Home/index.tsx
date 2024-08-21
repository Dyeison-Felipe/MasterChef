import { useEffect, useState } from 'react';
import { RecipieData } from '../../types/recipeData';
import { Link, useSearchParams } from 'react-router-dom';
import ModalDetails from '../../components/ModalDetails';
import { api } from '../../services/api';

export default function Home() {
  const [data, setData] = useState<RecipieData[]>([]);
  const [selectRecipe, setSelectRecipe] = useState<RecipieData | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('filter');

  const isOpenModal = (recipe: RecipieData) => {
    setSelectRecipe(recipe);
    setOpenModal(true);
  };

  const isCloseModal = () => {
    setSelectRecipe(null);
    setOpenModal(false);
  };

  useEffect(() => {
    api
      .get(`/recipes?category=${categoryFilter ?? ''}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log('algo deu errado', error);
      });
  }, [categoryFilter]);

  return (
    <section className="flex justify-center items-start min-h-screen p-4">
      <div className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-x-8 gap-y-8 pt-8">
        {data.map((recipe) => (
          <div
            key={recipe.id}
            className="text-center border border-black rounded-md flex flex-col items-center justify-center h-64 w-80 gap-4 p-4 shadow-2xl"
          >
            <h1 className="text-2xl font-bold">{recipe.name}</h1>
            <p>Categoria: {recipe.category}</p>
            <Link
              to=""
              onClick={() => isOpenModal(recipe)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Detalhes
            </Link>
          </div>
        ))}
      </div>

      {/* Condicionalmente renderiza o componente Modal se isModalOpen for true e selectedRecipe não for null. */}
      {openModal && selectRecipe && (
        <ModalDetails recipe={selectRecipe} closeModal={isCloseModal} />
      )}
    </section>
  );
}
