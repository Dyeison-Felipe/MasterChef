import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-around items-center bg-cyan-500 h-24">
      <div>
        <img
          className="w-20"
          src="/Logo_Master_Chef.svg"
          alt="Logotipo do site"
        />
      </div>

      <div>
        <ul className="flex gap-8 ">
          <Link className="text-black hover:text-white" to="/">
            Home
          </Link>
          <Link className="text-black hover:text-white" to="/register">
            Adicionar Receita
          </Link>
        </ul>
      </div>
    </nav>
  );
}
