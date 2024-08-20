import { Link } from "react-router-dom";
import { FaPizzaSlice, FaCandyCane } from "react-icons/fa";
import { GiSlicedBread, GiCakeSlice } from "react-icons/gi";
import { IoFastFoodSharp } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import NavbarButton from "../NavbarButton/NavbarButton";
import { useState } from "react";
import { RecipeCategory } from "../../enums/recipe";
import { NavbarCategory } from "../../types/categoryNavbar";

export default function Navbar({selectCategory}: NavbarCategory) {
  const [menu, setMenu] = useState(false);

  const clickMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="bg-cyan-500 flex flex-col max-md:flex gap-4 pb-4">
      <div className="flex justify-around items-center max-md:flex-col max-md:justify-center max-md:gap-4">
        <div>
          <Link to='/'>
            <img
              className="w-20"
              src="/Logo_Master_Chef.svg"
              alt="Logotipo do site"
            />
          </Link>
        </div>

        <span>
          {menu ? (
            <AiOutlineClose onClick={clickMenu} className={`flex md:hidden`} />
          ) : (
            <AiOutlineMenu onClick={clickMenu} className={`flex md:hidden`} />
          )}
        </span>

        <div className={`md:flex ${menu ? "flex" : "hidden"}`}>
          <ul className="flex justify-center items-center max-md:flex-col gap-4">
            <li>
              <Link className="text-black hover:text-white" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-black hover:text-white" to="/register">
                Adicionar Receita
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`${menu ? "flex" : "hidden"
          } md:flex md:justify-around md:items-center text-center max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-4`}
      >
        <NavbarButton text="Doces" icon={<FaCandyCane />} onClick={() => selectCategory(RecipeCategory.candy)} />

        <NavbarButton text="Salgados" icon={<IoFastFoodSharp />} onClick={() => selectCategory(RecipeCategory.salty)} />

        <NavbarButton text="Pizza" icon={<FaPizzaSlice />} onClick={() => selectCategory(RecipeCategory.pizza)}/>

        <NavbarButton text="Pães" icon={<GiSlicedBread />} onClick={() => selectCategory(RecipeCategory.bread)}/>

        <NavbarButton text="Sobremesa" icon={<GiCakeSlice />} onClick={() => selectCategory(RecipeCategory.dessert)}/>
      </div>
    </nav>
  );
}
