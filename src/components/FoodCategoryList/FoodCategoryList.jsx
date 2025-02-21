import React, { useEffect, useState } from "react";
import { api } from "../../service/api";
import styles from "./FoodCategoryList.module.scss";

const FoodCategoryList = () => {
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



  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <div className={styles.wrap}>
        {filteredCategories.map((cat) => (
          <div className={styles.card} key={cat.idCategory}>
            <img width={20} src={cat.strCategoryThumb} alt={cat.strCategory} />
            <p>{cat.strCategory}</p>
          </div>
        ))}

        </div>
      </div>
  );
};

export default FoodCategoryList;