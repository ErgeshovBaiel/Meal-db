import React from "react";
import styles from "./FoodCategoryList.module.scss";
import { Spin } from "antd";
import { useGetCategoryQuery } from "../../api/category";
import { useNavigate } from "react-router-dom";

const FoodCategoryList = () => {
    const { data, error, isLoading } = useGetCategoryQuery();
    const navigate = useNavigate();

    if (isLoading) {
        return (
            <div className={styles.loadingContainer}>
                <Spin size="large" />
            </div>
        );
    }

    if (error) {
        return <p className={styles.errorText}>Error: {error.message}</p>;
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>by Category</h2>
            <div className={styles.wrap}>
                {data?.categories?.slice(0, 12).map((cat) => (
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
    );
};

export default FoodCategoryList;