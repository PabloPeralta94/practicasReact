import React from 'react';
import './recipes.css'

function Recipes({ recipes }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-recipe">
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md ">
  <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">Recetas</h1>
  <ul className="space-y-4">
    {recipes.map((recipe) => (
      <li key={recipe.id} className="p-4 border border-gray-200 rounded-md bg-gray-50">
        <h2 className="text-xl font-semibold text-gray-800">{recipe.title}</h2>
        <p className="text-gray-600">{recipe.description}</p>
      </li>
    ))}
  </ul>
</div>
</div>
  );
}

export default Recipes;