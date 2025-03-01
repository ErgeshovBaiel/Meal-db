import React, { useState } from 'react'
import { Input } from 'antd'
import { PiHouseLine } from 'react-icons/pi'
import { FaUsers } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Header.module.scss'

const { Search } = Input

const Header = () => {
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')

  const onSearch = value => {
    if (value.trim()) {
      console.log(value)
      navigate(`/MealName/${value}`)
      setSearchValue('')
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div className={styles.logo}>
          <Link to={'/'}>
            <img
              src='https://the-mealdb-mimo.netlify.app/static/media/logo-mealDB.fa8d1d09f74f7c7f2a8b07b85e928f02.svg'
              alt='MealDB Logo'
            />
          </Link>
        </div>

        <div className={styles.searchContainer}>
          <Search
            placeholder='Find Your Meal'
            allowClear
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            onSearch={onSearch}
            style={{ width: 200 }}
          />
          <div className={styles.iconContainer}>
            <Link to={'/'}>
              <PiHouseLine className={styles.icon} />
            </Link>
            <FaUsers className={styles.icon} />
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Header
