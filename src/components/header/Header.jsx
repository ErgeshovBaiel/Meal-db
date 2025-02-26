import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { FaHouse } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

const Header = ({ onSearch }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
      <div className={styles.logo}>
        <NavLink to={'/'}>
          <img
            src='https://the-mealdb-mimo.netlify.app/static/media/logo-mealDB.fa8d1d09f74f7c7f2a8b07b85e928f02.svg'
            alt='MealDB Logo'
          />
        </NavLink>
      </div>

      <div className={styles.searchContainer}>
        <Search
          placeholder='Find Your Meal'
          allowClear
          onSearch={onSearch}
          style={{ width: 200 }}
        />
        <div className={styles.iconContainer}>
          <NavLink to={'/'}>
            <FaHouse className={styles.icon} />
          </NavLink>
          <FaUser className={styles.icon} />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Header;
