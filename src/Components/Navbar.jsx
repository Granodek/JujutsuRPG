import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-lg top-0 fixed sticky">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/"}>
          <p className="text-2xl font-bold text-indigo-400">
            RPG Jujutsu Dimension
          </p>
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to={"/rodadas"}>
              <p className="text-gray-300 hover:text-white transition-all">
                Rodadas
              </p>
            </Link>
          </li>
          <li>
            <Link to={"/fichas"}>
              <p className="text-gray-300 hover:text-white transition-all">
                Fichas
              </p>
            </Link>
          </li>
          <li>
            <Link to={"/minions"}>
              <p className="text-gray-300 hover:text-white transition-all">
                Minions
              </p>
            </Link>
          </li>
          <li>
            <Link to={"/inimigos"}>
              <p className="text-gray-300 hover:text-white transition-all">
                Inimigos
              </p>
            </Link>
          </li>
          <li>
          <Link to={"/calcular-dano"}>
              <p className="text-gray-300 hover:text-white transition-all">
                Calcular Dano
              </p>
            </Link>
          </li>
          <li>
          <Link to={"/calcular-evento"}>
              <p className="text-gray-300 hover:text-white transition-all">
                Calcular Evento
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
