import React from 'react'
import styles from './FoodCountry.module.scss'
import { Spin } from 'antd'
import { useParams, Link } from 'react-router-dom'
import { useGetByCountryQuery } from '../../api/foodByCountry'

const FoodCountry = () => {
  const { countryName } = useParams()
  console.log('Country Name from URL:', countryName)

  const { data, error, isLoading } = useGetByCountryQuery(countryName)

  if (isLoading) {
    return (
      <div className='flex items-center justify-center relative top-5 z-50'>
        <Spin size='large' />
      </div>
    )
  }

  if (error) {
    return <p className='text-red-500'>Error: {error.message}</p>
  }

  return (
    <div className={styles.America}>
      <h1 className={styles.name}>{countryName} Meals</h1>
      <div className={styles.foodList}>
        {data?.meals?.map(({ idMeal, strMeal, strMealThumb }) => (
          <Link to={`/food/${idMeal}`} key={idMeal} className={styles.foodcard}>
            <img className={styles.card} src={strMealThumb} alt={strMeal} />
            <p className='text-[20px] relative top-5'>{strMeal.slice(0, 12)}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FoodCountry
