import React, { useEffect, useState } from "react";
import { api } from "../../service/api";
import styles from "./FoodCategoryList.module.scss";
import { Spin } from "antd";

const FoodCategoryList = ({ searchTerm }) => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .fetchAllCategory()
      .then((data) => {
        const initialCategories = data.categories.slice(0, 12);
        setCategories(initialCategories);
        setFilteredCategories(initialCategories);
      })
      .catch((error) => console.error("Error fetching categories:", error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = categories.filter((cat) =>
        cat.strCategory.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCategories(filtered);
    } else {
      setFilteredCategories(categories);
    }
  }, [searchTerm, categories]);

  if (loading) {
    return (
      <div className="flex items-center justify-center relative top-5 z-50">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div className="mt-50 ml-40">
      <h2 className="flex items-center justify-center mr-50 mb-12.5 text-3xl">by Category</h2>
      <div className={styles.wrap}>
        {filteredCategories.map((cat) => (
          <div className={styles.card} key={cat.idCategory}>
            <img src={cat.strCategoryThumb} alt={cat.strCategory} />
            <p>{cat.strCategory}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCategoryList;