import React, { useEffect } from 'react'
import styles from './FoodDetail.module.scss'
import { Spin } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { fetchfoodDetail } from '../../redux/slice/foodDetailSlice'
import { useParams } from 'react-router-dom'

const FoodDetail = () => {
  const { idMeal } = useParams()
  const {
    list: foodDetail,
    loading,
    error
  } = useSelector(state => state.foodDetail)
  const dispatch = useDispatch()

  useEffect(() => {
    if (idMeal) {
      dispatch(fetchfoodDetail(idMeal))
    }
  }, [dispatch, idMeal])

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
    <div className='app-container relative top-40'>
      {foodDetail?.meals?.map(meal => (
        <div key={meal.idMeal} className={styles.foodDetailCard}>
          <div className='relative top-10'>
            <h1 className='text-3xl font-medium'>{meal.strMeal.slice(0,18)}</h1>
            <img
              className='meal-image w-75 h-75 rounded-full relative top-15'
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
          </div>

          <div className='w-200 relative left-100 bottom-45'>
            <ul className='flex flex-wrap gap-12'>
              {Object.keys(meal).map(key => {
                if (key.includes('strIngredient') && meal[key]) {
                  const ingredientIndex = key.split('strIngredient')[1]
                  const measure = meal[`strMeasure${ingredientIndex}`]

                  if (meal[key] && measure) {
                    return (
                      <li
                        key={ingredientIndex}
                        className='flex flex-col items-center gap-4'
                      >
                        <img
                          src={`https://www.themealdb.com/images/ingredients/${meal[key]}.png`}
                          alt={meal[key]}
                          className='w-40 h-40 object-cover'
                        />
                        <span className='text-lg font-normal'>
                          {measure} {meal[key]}
                        </span>
                      </li>
                    )
                  }
                }
                return null
              })}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FoodDetail
