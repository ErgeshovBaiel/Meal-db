import React from 'react';
import Country from '../../components/Country/Country';
import styles from './HomePage.module.scss';
import FoodCategoryList from '../../components/foodCategoryList/FoodCategoryList';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <FoodCategoryList />
      <Country />
    </div>
  );
}

export default HomePage;
