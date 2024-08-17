export default function Details() {
  return (
    <section className="flex flex-col items-center gap-8 h-full w-full ">
      <div className="flex flex-col justify-center border items-center border-black rounded-md w-4/6 h-auto p-4 text-center mt-4 mb-4 gap-4">
        <h1 className="text-2xl font-bold">Bolo de Chocolate Simples</h1>

        <div className="flex flex-col items-center gap-4  w-4/6 text-left p-4">
          <h3 className="text-lg font-semibold">Descrição:</h3>
          <p className="w-full">
            Um bolo de chocolate fácil e rápido de fazer, perfeito para qualquer
            ocasião. Este bolo é macio, úmido e tem um sabor intenso de
            chocolate.
          </p>
        </div>

        <div className=" w-4/6">
          <h3 className="text-lg font-semibold">Ingredientes:</h3>
          <ul className="text-left list-disc pl-8">
            <li>2 xícaras de farinha de trigo</li>
            <li>1 e 1/2 xícaras de açúcar</li>
            <li>3/4 xícara de cacau em pó</li>
            <li>2 ovos grandes</li>
            <li>1 xícara de leite</li>
            <li>1/2 xícara de óleo vegetal</li>
            <li>1 colher de chá de fermento em pó</li>
            <li>1 colher de chá de bicarbonato de sódio</li>
            <li>1 pitada de sal</li>
            <li>1 xícara de água quente</li>
            <li>1 colher de chá de essência de baunilha</li>
          </ul>
        </div>

        <div className="w-4/6">
          <h3 className="text-lg font-semibold">Modo de preparo:</h3>
          <ul className="text-left list-decimal pl-8">
            <li>
              Preaqueça o forno a 180°C e unte uma forma redonda com manteiga e
              farinha.
            </li>
            <li>
              Em uma tigela grande, peneire juntos a farinha, o açúcar, o cacau,
              o fermento, o bicarbonato e o sal.
            </li>
            <li>
              {" "}
              Adicione os ovos, o leite, o óleo e a essência de baunilha aos
              ingredientes secos e misture até obter uma massa homogênea.
            </li>
            <li>
              Adicione a água quente à massa, mexendo bem até incorporar. A
              massa ficará líquida, mas isso é normal.
            </li>
            <li>
              Despeje a massa na forma preparada e leve ao forno por cerca de
              35-40 minutos, ou até que um palito inserido no centro saia limpo.
            </li>
            <li>
              Deixe o bolo esfriar na forma por 10 minutos antes de desenformar.
              Deixe esfriar completamente antes de servir
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4 w-4/6 text-left pl-4">
          <h3 className="text-lg font-semibold">Tempo de preparo:</h3>
          <p>15 minutos</p>
        </div>

        <div className="flex items-center gap-4  w-4/6 text-left pl-4">
          <h3 className="text-lg font-semibold">tempo de cozimento:</h3>
          <p>40 minutos</p>
        </div>

        <div className="flex items-center gap-4  w-4/6 text-left pl-4">
          <h3 className="text-lg font-semibold">rendimento:</h3>
          <p>8 a 10 porções</p>
        </div>
      </div>
    </section>
  );
}
