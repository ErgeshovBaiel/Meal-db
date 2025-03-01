import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetIngredientQuery } from '../../api/mealby'
import { Spin } from 'antd'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from './Ingredient.module.scss'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

const Ingredient = () => {
  const { ingredientName } = useParams()
  const { data, error, isLoading } = useGetIngredientQuery(ingredientName)

  console.log('API Response:', data)

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Spin size='large' />
      </div>
    )
  }

  if (error) {
    return <p>Error: {error.message}</p>
  }

  const ingredientImage = `https://www.themealdb.com/images/ingredients/${ingredientName}.png`

  return (
    <div className={styles.container}>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className='mb-10'
      >
        <SwiperSlide>
          <div className='flex flex-col items-center'>
            <p className='text-5xl'>{ingredientName}</p>
            <img
              src={ingredientImage}
              alt={ingredientName}
              className={styles.img}
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center'>
        {data?.meals?.map(meal => (
          <Link 
          to={`/food/${meal.idMeal}`}
          key={meal.idMeal}
          >
            <div
              className='flex flex-col items-center cursor-pointer'
            >
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <p>{meal.strMeal}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Ingredient
