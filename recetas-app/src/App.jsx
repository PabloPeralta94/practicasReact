import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import AddRecipe from './pages/AddRecipe';
import RecipeSearch from './pages/RecipeSearch.jsx';
import NavBar from './shared/NavBar.jsx';



function App() {
  const [recipes, setRecipes] = useState([
    { id: 1, title: 'Carbonara', description: 'Un plato clasico italiano.' },
    { id: 2, title: 'Empanadas', description: 'Una comida tradicional de Argentina' }
  ]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, { ...newRecipe, id: recipes.length + 1 }]);
  };

  return (

    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recetas" element={<Recipes recipes={recipes} />} />
        <Route path="/agregar" element={<AddRecipe addRecipe={addRecipe} />} />
        <Route path="/busqueda" element={<RecipeSearch />} />
      </Routes>
      <div>SOY UN FOOTER SIN AMOR :C</div>
    </div>
  );
}

export default App;
