import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RecipieData } from '../../types/recipeData';
import { api } from '../../services/api';
import { useTitle } from '../../hooks/useTitle';

export default function Details() {
  useTitle('Detalhes');

  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<RecipieData | null>(null);

  useEffect(() => {
    try {
      api.get(`recipes/${id}`).then((response) => {
        setData(response.data);
      });
    } catch (error) {
      console.log('Ocorreu um erro ao buscar os detalhes ', error);
    }
  }, [id]);

  if (!data) {
    return <p>Carregando...</p>;
  }

  return (
    <section className="flex flex-col items-center gap-8 h-full min-h-screen ">
      <div className="flex flex-col justify-center border items-center border-black rounded-md w-5/6 h-auto p-4 text-center mt-4 mb-4 gap-12 max-md:w-6/6">
        <h1 className="text-2xl font-bold">{data.name}</h1>

        <div className="flex flex-col items-center gap-4 md:w-4/6 w-full  text-left p-4">
          <h3 className="text-lg font-semibold">Descrição:</h3>
          <p className="w-full">{data.description}</p>
        </div>

        <div className="w-6/6">
          <h3 className="text-lg font-semibold">Ingredientes:</h3>
          <ul className="text-left list-disc pl-8">
            {data.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient.name}</li>
            ))}
          </ul>
        </div>

        <div className=" md:w-4/6 w-full ">
          <h3 className="text-lg font-semibold">Modo de preparo:</h3>
          <p>{data.preparationMethod}</p>
        </div>

        <div className="flex items-center gap-4 w-6/6 text-left pl-4">
          <h3 className="text-lg font-semibold">Tempo de preparo:</h3>
          <p>{data.cookingTime}</p>
        </div>

        <div className="flex items-center gap-4 w-6/6 text-left pl-4">
          <h3 className="text-lg font-semibold">Rendimento:</h3>
          <p>{data.serving}</p>
        </div>
      </div>
    </section>
  );
}
