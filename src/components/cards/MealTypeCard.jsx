import React from 'react'
import PropTypes from 'prop-types'
const MealTypeCard = ({mealType, totalRecipes}) => {
  return (
     <div className="bg-background bg-contain text-white w-72 m-1 rounded-md p-3 flex justify-center items-center">
      <div>
      <h3 className='text-5xl font-semibold' style={{fontFamily: "Parisienne"}}>{mealType}</h3>
      <p className='text-lg'>{totalRecipes} Recipes</p>
      </div>
      <div>
        <img src="/meal.png" alt="" width={100} height={100} />
      </div>
    </div>
  )
}

MealTypeCard.propTypes ={
  mealType: PropTypes.string.isRequired,
  totalRecipes:PropTypes.number.isRequired,
}

export default MealTypeCard