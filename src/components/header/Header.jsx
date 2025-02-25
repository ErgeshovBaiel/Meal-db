import React from 'react'
import { AudioOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { FaHouse } from 'react-icons/fa6'
import { FaUser } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import styles from '../header/Header.module.scss'


const { Search } = Input

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff'
    }}
  />
)

const Header = ({ onSearch }) => {
  return (
    <div className={styles.container}>
      <div className="relative   flex items-center justify-between h-30">
      <div className='w-62.5'>
        <NavLink to={'/'}>
          <img
            src='https://the-mealdb-mimo.netlify.app/static/media/logo-mealDB.fa8d1d09f74f7c7f2a8b07b85e928f02.svg'
            alt=''
          />
        </NavLink>
      </div>

      <div className='flex gap-10'>
        <Search
          placeholder='Find Your Meal'
          allowClear
          onSearch={onSearch}
          style={{
            width: 200,
           }}
        />
        <div className='flex gap-5 mt-2.5 relative top-2.5'>
          <NavLink to={'/'}>
            <FaHouse className='text-gray-900' />
          </NavLink>
          <FaUser className='text-gray-900' />
        </div>
      </div>
      </div>

    </div>
  )
}

export default Header
