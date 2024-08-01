import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 shadow-lg">
            <div className="container mx-auto flex items-center justify-between p-4">
                <h1 className="text-white text-2xl font-semibold">Recetapp</h1>
                <ul className="flex space-x-6">
                    <li>
                        <Link
                            to="/"
                            className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded transition duration-300"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/recetas"
                            className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded transition duration-300"
                        >
                            Recetas
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/agregar"
                            className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded transition duration-300"
                        >
                            Agregar Receta
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/busqueda"
                            className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded transition duration-300"
                        >
                            Búsqueda
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar