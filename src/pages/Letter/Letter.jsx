import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useGetLetterQuery } from '../../api/mealby'
import styles from './Letter.module.scss'
import { Spin } from 'antd'

const Letter = () => {
  let { curr: letter } = useParams()
  const navigate = useNavigate()
  const { data, isLoading, isError } = useGetLetterQuery(letter)
  const meals = data?.meals || []

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Spin />
      ) : isError || !meals.length ? (
        <p className='text-3xl text-center mb-8'>
          No Meals that start with {letter.toUpperCase()}
        </p>
      ) : (
        <div className='max-w-5xl mx-auto mb-10'>
          <h1>{`Recipes that start with ${letter.toUpperCase()}`}</h1>
          <div className={styles.grid}>
            {meals.map(item => (
              <Link to={`/food/${item.idMeal}`} key={item.idMeal}>
                <div
                  className={styles.mealCard}
                  onClick={() => navigate(`../meal/${item.idMeal}`)}
                >
                  <img src={item.strMealThumb} alt={item.strMeal} />
                  <p>{item.strMeal}</p>
                </div>  
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Letter
