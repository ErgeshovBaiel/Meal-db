import React from 'react'
import styles from './FoodDetail.module.scss'
import { Spin } from 'antd'
import { useParams } from 'react-router-dom'
import { useGetFoodDetailQuery } from '../../api/mealby'

const FoodDetail = () => {
  const { idMeal } = useParams()
  const { data, error, isLoading } = useGetFoodDetailQuery(idMeal)

  if (isLoading) {
    return (
      <div className={styles.loaderContainer}>
        <Spin size='large' />
      </div>
    )
  }

  if (error) {
    return <p className={styles.errorMessage}>Error: {error.message}</p>
  }

  return (
    <div className={styles.container}>
      {data?.meals?.map(meal => (
        <div key={meal.idMeal} className={styles.foodDetailCard}>
          <div className={styles.mealInfo}>
            <h1 className={styles.mealTitle}>{meal.strMeal.slice(0, 24)}</h1>
            <img
              className={styles.mealImage}
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
          </div>

          <div className={styles.ingredientsContainer}>
            <ul className={styles.ingredientsList}>
              {Object.keys(meal).map(key => {
                if (key.includes('strIngredient') && meal[key]) {
                  const ingredientIndex = key.split('strIngredient')[1]
                  const measure = meal[`strMeasure${ingredientIndex}`]

                  return (
                    <li key={ingredientIndex} className={styles.ingredientItem}>
                      <img
                        src={`https://www.themealdb.com/images/ingredients/${meal[key]}.png`}
                        alt={meal[key]}
                        className={styles.ingredientImage}
                      />
                      <span className={styles.ingredientText}>
                        {`${measure} ${meal[key]}`.slice(0,24)}
                      </span>
                    </li>
                  )
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
