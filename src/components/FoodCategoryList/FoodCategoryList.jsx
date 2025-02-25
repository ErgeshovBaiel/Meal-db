import React, { useEffect } from 'react'
import styles from './FoodCategoryList.module.scss'
import { Spin } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategory } from '../../redux/slice/categorySlice'
import { useNavigate } from 'react-router-dom'

const FoodCategoryList = () => {
  const {
    list: category,
    loading,
    error
  } = useSelector(state => state.category)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchCategory())
  }, [dispatch])

  if (loading) {
    return (
      <div className='flex items-center justify-center relative top-10 z-50'>
        <Spin size='large' />
      </div>
    )
  }

  return (
    <div className='relative top-50'>
      <h2 className='flex items-center justify-center relative bottom-5 right-15 text-3xl '>
        by Category
      </h2>
      <div className={styles.wrap}>
        {category?.categories?.slice(0, 12).map(cat => (
          <div
            className={styles.card}
            key={cat.idCategory}
            onClick={() => navigate(`/category/${cat.strCategory}`)}
          >
            <img src={cat.strCategoryThumb} alt={cat.strCategory} />
            <p>{cat.strCategory}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FoodCategoryList
