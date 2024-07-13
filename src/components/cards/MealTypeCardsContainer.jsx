import React,{useState, useEffect} from 'react'
import axios from 'axios'
import MealTypeCard from './MealTypeCard'

const MealTypeCardsContainer = () => {

    const [mealTypesData,setMealTypesData] = useState([]);

    useEffect(()=> {
        const fetchMealTypesData = async() => {
            try {
                const response = await axios.get('http://localhost:5000/recipes');
                const recipes = response.data;
                const mealTypesMap = new Map();

                recipes.forEach(recipe => {
                    const {mealType} = recipe;
                    if (mealTypesMap.has(mealType)){
                        mealTypesMap.set(mealType,mealTypesMap.get(mealType) + 1);
                    } else {
                        mealTypesMap.set(mealType, 1)
                    }
                });

                const mealTypesArray = Array.from(mealTypesMap.entries()).map(([mealType, count]) => ({
                    mealType,
                    totalRecipes: count,
                }));

                setMealTypesData(mealTypesArray);
            }catch(error){
                console.error('Error fetching recipes: ', error);
            }
        }
        fetchMealTypesData();
    }, [])
  return (
    <div className='flex'>
        {mealTypesData.map((mealTypesData) => (
            <MealTypeCard
                key={mealTypesData.mealType}
                mealType={mealTypesData.mealType}
                totalRecipes={mealTypesData.totalRecipes}
            />
        ))}        
    </div>
  )
}

export default MealTypeCardsContainer