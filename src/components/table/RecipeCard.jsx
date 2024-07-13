import React from "react";
import { BsFire } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg m-4 h-96">
      <img
        className="w-72 h-48 object-contain"
        src={recipe.image}
        alt={recipe.title}
      />
      <div className="px-2 py-4">
        <div className="font-bold text-xl mb-2 capitalize">{recipe.title}</div>
        <div className="flex justify-between">
          <p className="text-gray-700 text-base"> {recipe.cuisine}</p>
          <span className="bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 flex">
            <BsFire size={20} /> {recipe.nutritionalInfo.calories} kcal
          </span>
        </div>
        <div className="flex justify-between mt-3">
          <a
            href=""
            className="bg-amber-500 text-sm  text-blue-950 p-1 rounded-md"
          >
            View Recipe
          </a>

          <a href="">
            {" "}
            <FaRegHeart size={25} />
          </a>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2"></div>
    </div>
  );
};

export default RecipeCard;
