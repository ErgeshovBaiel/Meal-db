import React from "react";
import styles from "./FoodCountry.module.scss";
import { Spin } from "antd";
import { useParams, Link } from "react-router-dom";
import { useGetByCountryQuery } from "../../api/mealby";

const FoodCountry = () => {
  const { countryName } = useParams();
  console.log("Country Name from URL:", countryName);

  const { data, error, isLoading } = useGetByCountryQuery(countryName);

  if (isLoading) {
    return (
      <div className={styles.loaderContainer}>
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return <p className={styles.errorMessage}>Error: {error.message}</p>;
  }

  return (
    <div className={styles.America}>
      <h1 className={styles.name}>{countryName} Meals</h1>
      <div className={styles.foodList}>
        {data?.meals?.map(({ idMeal, strMeal, strMealThumb }) => (
          <Link to={`/food/${idMeal}`} key={idMeal} className={styles.foodcard}>
            <img className={styles.card} src={strMealThumb} alt={strMeal} />
            <p className={styles.foodName}>{strMeal}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FoodCountry;
