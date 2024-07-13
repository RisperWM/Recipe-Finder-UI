import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  ingredients: yup.array().of(yup.string().required("Ingredient is required")),
  steps: yup.array().of(yup.string().required("Step is required")),
  cookingTime: yup.number().required("Cooking time is required").positive().integer(),
  servings: yup.number().required("Servings are required").positive().integer(),
  cuisine: yup.string().required("Cuisine is required"),
  mealType: yup.string().required("Meal type is required"),
  dietaryRestrictions: yup.array().of(yup.string()),
  nutritionalInfo: yup.object().shape({
    calories: yup.number().required("Calories are required").positive().integer(),
    protein: yup.number().required("Protein is required").positive().integer(),
    fat: yup.number().required("Fat is required").positive().integer(),
    carbohydrates: yup.number().required("Carbohydrates are required").positive().integer(),
  }),
  image: yup.string().required("Image URL is required"),
});

const AddForm = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      ingredients: [],
      steps: [],
      dietaryRestrictions: [],
      nutritionalInfo: {
        calories: "",
        protein: "",
        fat: "",
        carbohydrates: "",
      },
    },
  });

  const {
    fields: ingredientFields,
    append: appendIngredient,
    remove: removeIngredient,
  } = useFieldArray({
    control,
    name: "ingredients",
  });

  const {
    fields: stepFields,
    append: appendStep,
    remove: removeStep,
  } = useFieldArray({
    control,
    name: "steps",
  });

  const {
    fields: restrictionFields,
    append: appendRestriction,
    remove: removeRestriction,
  } = useFieldArray({
    control,
    name: "dietaryRestrictions",
  });

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/recipes",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("There was an error uploading the data!", error);
    }
  };

  const pages = [
    <div key="page1">
      <h2 className="text-2xl text-white mb-4 font-semibold">Recipe Details</h2>
      <label className="block mb-4">
        Title:
        <input
          {...register("title")}
          className="block w-full p-2 mt-2 border border-amber-400 rounded text-black"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </label>
      <label className="block mb-4">
        Cuisine:
        <input
          {...register("cuisine")}
          className="block w-full p-2 mt-2 border border-amber-400 rounded text-black"
        />
        {errors.cuisine && (
          <p className="text-red-500">{errors.cuisine.message}</p>
        )}
      </label>
      <label className="block mb-4">
        Meal Type:
        <input
          {...register("mealType")}
          className="block w-full p-2 mt-2 border border-amber-400 rounded text-black"
        />
        {errors.mealType && (
          <p className="text-red-500">{errors.mealType.message}</p>
        )}
      </label>
      <label className="block mb-4">
        Cooking Time (mins):
        <input
          type="number"
          {...register("cookingTime")}
          className="block w-full p-2 mt-2 border border-amber-400 rounded text-black"
        />
        {errors.cookingTime && (
          <p className="text-red-500">{errors.cookingTime.message}</p>
        )}
      </label>
      <label className="block mb-4">
        Servings:
        <input
          type="number"
          {...register("servings")}
          className="block w-full p-2 mt-2 border border-amber-400 rounded text-black"
        />
        {errors.servings && (
          <p className="text-red-500">{errors.servings.message}</p>
        )}
      </label>
      <label className="block mb-4">
        Dietary Restrictions:
        {restrictionFields.map((restriction, index) => (
          <div key={restriction.id} className="flex mb-4 items-center">
            <input
              {...register(`dietaryRestrictions.${index}`)}
              className="block w-full p-2 border border-amber-400 rounded text-black"
            />
            <button
              type="button"
              onClick={() => removeRestriction(index)}
              className="ml-2 bg-red-500 text-white px-3 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => appendRestriction("")}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          Add Dietary Restriction
        </button>
        {errors.dietaryRestrictions && (
          <p className="text-red-500">{errors.dietaryRestrictions.message}</p>
        )}
      </label>
    </div>,
    <div key="page2">
      <h2 className="text-2xl text-white mb-4">Ingredients</h2>
      {ingredientFields.map((ingredient, index) => (
        <div key={ingredient.id} className="flex mb-4 items-center">
          <input
            {...register(`ingredients.${index}`)}
            className="block w-full p-2 border border-amber-400 rounded text-black"
          />
          <button
            type="button"
            onClick={() => removeIngredient(index)}
            className="ml-2 bg-red-500 text-white px-3 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => appendIngredient("")}
        className="bg-green-500 text-white px-3 py-1 rounded"
      >
        Add Ingredient
      </button>
    </div>,
    <div key="page3">
      <h2 className="text-2xl text-white mb-4">Steps</h2>
      {stepFields.map((step, index) => (
        <div key={step.id} className="flex mb-4 items-center">
          <input
            {...register(`steps.${index}`)}
            className="block w-full p-2 border border-amber-400 rounded text-black"
          />
          <button
            type="button"
            onClick={() => removeStep(index)}
            className="ml-2 bg-red-500 text-white px-3 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => appendStep("")}
        className="bg-green-500 text-white px-3 py-1 rounded"
      >
        Add Step
      </button>
    </div>,
    <div key="page4">
      <h2 className="text-2xl text-white mb-4">Nutritional Information</h2>
      <label className="block mb-4">
        Calories:
        <input
          type="number"
          {...register("nutritionalInfo.calories")}
          className="block w-full p-2 mt-2 border border-amber-400 rounded text-black"
        />
        {errors.nutritionalInfo?.calories && (
          <p className="text-red-500">{errors.nutritionalInfo.calories.message}</p>
        )}
      </label>
      <label className="block mb-4">
        Protein (g):
        <input
          type="number"
          {...register("nutritionalInfo.protein")}
          className="block w-full p-2 mt-2 border border-amber-400 rounded text-black"
        />
        {errors.nutritionalInfo?.protein && (
          <p className="text-red-500">{errors.nutritionalInfo.protein.message}</p>
        )}
      </label>
      <label className="block mb-4">
        Fat (g):
        <input
          type="number"
          {...register("nutritionalInfo.fat")}
          className="block w-full p-2 mt-2 border border-amber-400 rounded text-black"
        />
        {errors.nutritionalInfo?.fat && (
          <p className="text-red-500">{errors.nutritionalInfo.fat.message}</p>
        )}
      </label>
      <label className="block mb-4">
        Carbohydrates (g):
        <input
          type="number"
          {...register("nutritionalInfo.carbohydrates")}
          className="block w-full p-2 mt-2 border border-amber-400 rounded text-black"
        />
        {errors.nutritionalInfo?.carbohydrates && (
          <p className="text-red-500">{errors.nutritionalInfo.carbohydrates.message}</p>
        )}
      </label>
    </div>,
    <div key="page5">
      <h2 className="text-2xl text-white mb-4">Image URL</h2>
      <label className="block mb-4">
        Image URL:
        <input
          type="url"
          {...register("image")}
          className="block w-full p-2 mt-2 border border-amber-400 rounded text-black"
        />
        {errors.image && (
          <p className="text-red-500">{errors.image.message}</p>
        )}
      </label>
    </div>,
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      {pages[currentPage]}
      <div className="mt-4">
        {currentPage > 0 && (
          <button
            type="button"
            onClick={prevPage}
            className="bg-gray-500 text-white px-3 py-1 rounded mr-2"
          >
            Previous
          </button>
        )}
        {currentPage < pages.length - 1 && (
          <button
            type="button"
            onClick={nextPage}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Next
          </button>
        )}
        {currentPage === pages.length - 1 && (
          <button type="submit" className="bg-green-500 text-white px-3 py-1 rounded">
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default AddForm;
