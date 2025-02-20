import styles from "./FoodCategoryList.module.scss";
import { api } from "../../service/api";
import { useEffect, useState } from "react";
import { Spin } from "antd";

const FoodCategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.fetchAllCategory()
      .then(data => setCategories(data.categories.slice(0,12)))
      .catch(error => console.error("Error fetchыквеапнргошлщдing categories:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spin size="large" />;
  }

  return (
    <div className={styles.wrap}>
      {categories.map(cat => (
        <div className={styles.card} key={cat.idCategory}>
          <img src={cat.strCategoryThumb} alt={cat.strCategory} />
          <p>{cat.strCategory}</p>
        </div>
      ))}
    </div>
  );
};

export default FoodCategoryList;
