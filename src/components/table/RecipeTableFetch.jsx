import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeTable from './RecipeTable';

const RecipeTableFetch = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/recipes');
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="container m-2">
      <h1 className="text-2xl font-semibold mb-4">Recipe Dashboard</h1>
      <RecipeTable recipes={recipes} />
    </div>
  );
};

export default RecipeTableFetch;
