import React, { useEffect } from 'react'
import styles from './FoodByCategory.module.scss'
import { Spin } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { fetchfoodCategory } from '../../redux/slice/foodCategorySlice'
import { useParams, Link, data } from 'react-router-dom'
import {useGetByCountryQuery} from "../../api/foodByCountry"

const FoodByCategory = () => {
  const { categoryName } = useParams(); 
  const {data} = useGetByCountryQuery(categoryName)
  console.log(data);
  
  const {
    list: foodcategory,
    loading,
    error
  } = useSelector(state => state.foodCategory)
  const dispatch = useDispatch()

  useEffect(() => {
    if (categoryName) {
      dispatch(fetchfoodCategory(categoryName)) 
    }
  }, [dispatch, categoryName])

  if (loading) {
    return (
      <div className='flex items-center justify-center relative top-5 z-50'>
        <Spin size='large' />
      </div>
    )
  }

  if (error) {
    return <p className='text-red-500'>Error: {error}</p>
  }

  return (
    <div className="mt-7.5">
      <h1 className={styles.name}>{categoryName}</h1>
      <div className={styles.foodList}>
        {foodcategory?.meals?.map(meal => (
          <Link 
            to={`/food/${meal.idMeal}`}
            key={meal.idMeal} 
            className={styles.foodcard}
          >
            <img 
              className={styles.card}
              src={meal.strMealThumb} 
              alt={meal.strMeal} 
            />
            <p>{meal.strMeal.slice(0, 12)}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FoodByCategory
