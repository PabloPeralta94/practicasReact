import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-kitchen">
      <div className="bg-black bg-opacity-60 p-10 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg text-white">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-white drop-shadow-md">
          Bienvenido a la Aplicación de Recetas
        </h1>
        <nav>
          <ul className="space-y-6">
            <li>
              <Link
                to="/recetas"
                className="text-lg font-semibold bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out p-4 rounded-md block text-center shadow-md"
              >
                Ver Recetas
              </Link>
            </li>
            <li>
              <Link
                to="/agregar"
                className="text-lg font-semibold bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out p-4 rounded-md block text-center shadow-md"
              >
                Agregar Nueva Receta
              </Link>
            </li>
            <li>
              <Link
                to="/busqueda"
                className="text-lg font-semibold bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out p-4 rounded-md block text-center shadow-md"
              >
                Buscar Receta
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Home;