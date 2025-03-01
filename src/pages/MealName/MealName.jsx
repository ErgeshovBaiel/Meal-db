import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSearchByNameQuery } from '../../api/mealby'
import { Spin } from 'antd'
import styles from './MealName.module.scss'

const MealName = () => {
  const { MealName } = useParams()
  const { data, isLoading } = useSearchByNameQuery(MealName, {
    skip: !MealName
  })

  if (isLoading) {
    return <Spin />
  }

  console.log(data)

  return (
    <div className={styles.container}>
      <h2>{MealName} Recipes</h2>
      <div className={styles.meallist}>
        {data?.meals ? (
          data.meals.map(meal => (
            <Link to={`/food/${meal.idMeal}`}>
              <div key={meal.idMeal} className={styles.mealitem}>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <h3>{meal.strMeal}</h3>
              </div>
            </Link>
          ))
        ) : (
          <p>No meals found</p>
        )}
      </div>
    </div>
  )
}

export default MealName
