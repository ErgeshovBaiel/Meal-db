import React from 'react';
import Country from '../../components/Country/Country';
import FoodCategoryList from '../../components/foodCategoryList/FoodCategoryList';
import Hero from '../../components/Hero/Hero';
import styles from './HomePage.module.scss';
import FoodChoiceMeat from '../../components/FoodChoiceMeat/FoodChoiceMeat';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Hero />
      <FoodChoiceMeat />
      <FoodCategoryList />
      <Country />
    </div>
  );
}

export default HomePage;
