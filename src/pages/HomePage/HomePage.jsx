import React from 'react'
import FoodCategoryList from '../../components/foodCategoryList/FoodCategoryList'
import Country from '../../components/country/Country'

const HomePage = () => {
  return (
    <div>
      <FoodCategoryList />
      <Country />
    </div>
  )
}

export default HomePage