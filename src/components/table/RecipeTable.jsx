import React, {useState, useMemo} from "react";
import PropTypes from "prop-types";
import { FaEye } from "react-icons/fa";
import { RiEdit2Line } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";

const RecipeTable = ({ recipes }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDietaryRestrictions, setFilterDietaryRestrictions] =
    useState("");
  const [filterCuisine, setFilterCuisine] = useState("");
  const [filterMealType, setFilterMealType] = useState("");

  const uniqueDietaryRestrictions = useMemo(() => {
    const allDietaryRestrictions = recipes.flatMap(
      (recipe) => recipe.dietaryRestrictions
    );
    return [...new Set(allDietaryRestrictions)];
  }, [recipes]);

  const uniqueCuisines = useMemo(() => {
    const allCuisines = recipes.map((recipe) => recipe.cuisine);
    return [...new Set(allCuisines)];
  }, [recipes]);

  const uniqueMealTypes = useMemo(() => {
    const allMealTypes = recipes.map((recipe) => recipe.mealType);
    return [...new Set(allMealTypes)];
  }, [recipes]);

  const filteredRecipes = recipes.filter((recipe) => {
    return (
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterDietaryRestrictions
        ? recipe.dietaryRestrictions.includes(filterDietaryRestrictions)
        : true) &&
      (filterCuisine ? recipe.cuisine === filterCuisine : true) &&
      (filterMealType ? recipe.mealType === filterMealType : true)
    );
  });

  return (
    <div className="p-2">
      <div className="flex flex-wrap mb-4 gap-4">
        <input
          type="text"
          placeholder="Search by title"
          className="p-2 border border-gray-300 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 border border-gray-300 rounded"
          value={filterDietaryRestrictions}
          onChange={(e) => setFilterDietaryRestrictions(e.target.value)}
        >
          <option value="">All Dietary Restrictions</option>
          {uniqueDietaryRestrictions.map((restriction) => (
            <option key={restriction} value={restriction}>
              {restriction}
            </option>
          ))}
        </select>
        <select
          className="p-2 border border-gray-300 rounded"
          value={filterCuisine}
          onChange={(e) => setFilterCuisine(e.target.value)}
        >
          <option value="">All Cuisines</option>
          {uniqueCuisines.map((cuisine) => (
            <option key={cuisine} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
        <select
          className="p-2 border border-gray-300 rounded"
          value={filterMealType}
          onChange={(e) => setFilterMealType(e.target.value)}
        >
          <option value="">All Meal Types</option>
          {uniqueMealTypes.map((mealType) => (
            <option key={mealType} value={mealType}>
              {mealType}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full">
        <table className="w-full divide-y divide-gray-200 border">
          <thead className="bg-stone-900">
            <tr>
              <th
                scope="col"
                className="border px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Title
              </th>
              <th
                scope="col"
                className="border px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Ingredients
              </th>
              <th
                scope="col"
                className="border px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Cooking Time
              </th>
              <th
                scope="col"
                className="border px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Servings
              </th>
              <th
                scope="col"
                className="border px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Cuisine
              </th>
              <th
                scope="col"
                className="border px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Meal Type
              </th>
              <th
                scope="col"
                className="border px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Dietary Restrictions
              </th>
              <th
                scope="col"
                className="border px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Updated At
              </th>
              <th
                scope="col"
                className="border px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredRecipes.map((recipe) => (
              <tr key={recipe._id}>
                <td className="border px-3 py-2 whitespace-nowrap">
                  {recipe.title}
                </td>
                <td className="border px-3 py-2 whitespace-normal flex-wrap">
                  {recipe.ingredients.join(", ")}
                </td>
                <td className="border px-3 py-2 whitespace-nowrap">
                  {recipe.cookingTime} mins
                </td>
                <td className="border px-3 py-2 whitespace-nowrap">
                  {recipe.servings}
                </td>
                <td className="border px-3 py-2 whitespace-nowrap">
                  {recipe.cuisine}
                </td>
                <td className="border px-3 py-2 whitespace-nowrap">
                  {recipe.mealType}
                </td>
                <td className="border px-3 py-2 whitespace-normal flex-wrap">
                  {recipe.dietaryRestrictions.join(", ")}
                </td>
                <td className="border px-3 py-2 whitespace-normal">
                  {new Date(recipe.updatedAt).toLocaleDateString()}
                </td>
                <td className="px-3 py-2 whitespace-nowrap flex gap-2 justify-center items-center">
                  <a href="">
                    <FaEye color="blue" size={20} />
                  </a>
                  <a href="">
                    <RiEdit2Line color="green" size={20} />
                  </a>
                  <a href="">
                    <MdDeleteOutline color="red" size={20} />{" "}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

RecipeTable.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
      cookingTime: PropTypes.number.isRequired,
      servings: PropTypes.number.isRequired,
      cuisine: PropTypes.string.isRequired,
      mealType: PropTypes.string.isRequired,
      dietaryRestrictions: PropTypes.arrayOf(PropTypes.string).isRequired,
      updatedAt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RecipeTable;
