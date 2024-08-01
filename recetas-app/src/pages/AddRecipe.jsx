import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './addRecipe.css'

function AddRecipe({ addRecipe }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ title, description });
    navigate('/recetas');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center add-recipe">
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
  <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">Agregar Nueva Receta</h1>
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2">Título:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2">Descripción:</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      ></textarea>
    </div>
    <button
      type="submit"
      className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      Agregar Receta
    </button>
  </form>
</div>
</div>
  );
}

export default AddRecipe;