import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/recipes");
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes", error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="flex flex-wrap min-h-screen">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe._id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
