import React from "react";
import { Link } from "react-router-dom";
import bgLogo from "../../assets/teste2.png"
const Home = () => {
    return (
      <div className="bg-black text-white min-h-screen" style={{ backgroundImage: `url(${bgLogo})` }}>
        <div className="flex flex-col items-center justify-center h-screen text-center px-4">
          <h1 className="text-6xl font-bold text-red-700 drop-shadow-lg">
            Bem-vindo ao Mundo dos Caçadores
          </h1>
          <p className="mt-4 font-bold text-lg text-blue-500 max-w-2xl">
            Explore um mundo cheio de mistérios e desafios. Desenvolva suas habilidades e enfrente inimigos poderosos.
          </p>
          <div className="mt-6 flex">
            <Link to={'/fichas'}>
              <p className="px-6 py-3 bg-blue-600 hover:bg-indigo-800 text-white rounded-lg shadow-lg text-lg transition-all">Acessar Fichas</p>
            </Link>
            <Link to={'/calcular-dano'}>
              <p className="ml-4 px-6 py-3 bg-purple-600 hover:bg-red-800 text-white rounded-lg shadow-lg text-lg transition-all">Calcular Dano</p>
            </Link>
            <Link to={'/calcular-evento'}>
              <p className="ml-4 px-6 py-3 bg-red-600 hover:bg-red-800 text-white rounded-lg shadow-lg text-lg transition-all">Calcular Evento</p>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;