import React from "react";
import styles from "./FoodByCategory.module.scss";
import { Spin } from "antd";
import { useParams, Link } from "react-router-dom";
import { useGetFoodByCategoryQuery } from "../../api/mealby";

const FoodByCategory = () => {
    const { categoryName } = useParams();
    const { data, error, isLoading } = useGetFoodByCategoryQuery(categoryName);

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
        <div className={styles.container}>
            <h1 className={styles.name}>{categoryName}</h1>
            <div className={styles.foodList}>
                {data?.meals?.map((meal) => (
                    <Link
                    to={`/food/${meal.idMeal}`}
                    key={meal.idMeal}
                        className={styles.foodcard}
                    >
                        <img className={styles.card} src={meal.strMealThumb} alt={meal.strMeal} />
                        <p>{meal.strMeal.slice(0, 12)}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default FoodByCategory;
