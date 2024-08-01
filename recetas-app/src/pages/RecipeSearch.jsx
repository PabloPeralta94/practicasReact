import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
import './search.css';


const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const app_id = 'f87abf4f'; 
  const app_key = '30828f1b78e085f1cbc19d47df2b3f64'; 

  const searchRecipes = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}&from=0&to=10`
      );
      if (!response.ok) {
        throw new Error('Error fetching data');
      }
      const data = await response.json();
      setRecipes(data.hits);
    } catch (err) {
      setError('Error fetching data');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center buscar">
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">Buscar Recetas</h1>
      <form onSubmit={searchRecipes} className="mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ingresa un ingrediente..."
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 mt-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Buscar
        </button>
      </form>
      {loading ? (
        <div className="flex justify-center items-center">
          <ClipLoader color="#4A90E2" loading={loading} size={150} />
        </div>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <ul className="space-y-4">
          {recipes.map((recipe, index) => (
            <li key={index} className="p-4 border border-gray-200 rounded-md bg-gray-50">
              <h2 className="text-xl font-semibold text-gray-800">{recipe.recipe.label}</h2>
              <p className="text-gray-600">Calorías: {Math.round(recipe.recipe.calories)}</p>
              <img src={recipe.recipe.image} alt={recipe.recipe.label} className="w-full h-auto mt-2 rounded-md" />
              <a
                href={recipe.recipe.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Ver receta completa
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
};

export default RecipeSearch;
