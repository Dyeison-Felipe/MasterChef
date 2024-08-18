import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPizzaSlice, FaCandyCane } from 'react-icons/fa';
import { GiSlicedBread, GiCakeSlice } from 'react-icons/gi';
import { IoFastFoodSharp } from 'react-icons/io5';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex flex-col justify-between items-center bg-cyan-500 h-auto">
      <div className="flex flex-col justify-between items-center w-full px-4 gap-4">
        <div>
          <img
            className="w-20"
            src="/Logo_Master_Chef.svg"
            alt="Logotipo do site"
          />
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <AiOutlineClose size={30} />
            ) : (
              <AiOutlineMenu size={30} />
            )}
          </button>
        </div>

        <div className="hidden md:flex  md:flex-row items-center text-center gap-8">
          <ul className="flex gap-8">
            <li>
              <Link className="text-black hover:text-white" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-black hover:text-white" to="">
                Adicionar Receita
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex  md:flex-row items-center gap-4 w-full">
          <button className="border-none border-black rounded-md w-full bg-[#D9A900] flex justify-center items-center gap-2">
            Doces <FaCandyCane />
          </button>
          <button className="border-none border-black rounded-md w-full bg-[#D9A900] flex justify-center items-center gap-2">
            Salgados <IoFastFoodSharp />
          </button>
          <button className="border-none border-black rounded-md w-full bg-[#D9A900] flex justify-center items-center gap-2">
            Pizza <FaPizzaSlice />
          </button>
          <button className="border-none border-black rounded-md w-full bg-[#D9A900] flex justify-center items-center gap-2">
            Pães <GiSlicedBread />
          </button>
          <button className="border-none border-black rounded-md w-full bg-[#D9A900] flex justify-center items-center gap-2">
            Sobremesa <GiCakeSlice />
          </button>
        </div>
      </div>

      <div
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-col items-center gap-4 md:hidden w-full`}
      >
        <ul className="flex flex-col gap-4">
          <li className="text-center">
            <Link className="text-black hover:text-white" to="/">
              Home
            </Link>
          </li>
          <li className="text-center">
            <Link className="text-black hover:text-white" to="">
              Adicionar Receita
            </Link>
          </li>
        </ul>
        <div className="flex flex-col gap-4 w-full justify-center items-center">
          <button className="border-none border-black rounded-md w-44 bg-[#D9A900] flex justify-center items-center gap-2">
            Doces <FaCandyCane />
          </button>
          <button className="border-none border-black rounded-md w-44 bg-[#D9A900] flex justify-center items-center gap-2">
            Salgados <IoFastFoodSharp />
          </button>
          <button className="border-none border-black rounded-md w-44 bg-[#D9A900] flex justify-center items-center gap-2">
            Pizza <FaPizzaSlice />
          </button>
          <button className="border-none border-black rounded-md w-44 bg-[#D9A900] flex justify-center items-center gap-2">
            Pães <GiSlicedBread />
          </button>
          <button className="border-none border-black rounded-md w-44 bg-[#D9A900] flex justify-center items-center gap-2">
            Sobremesa <GiCakeSlice />
          </button>
        </div>
      </div>
    </nav>
  );
}
