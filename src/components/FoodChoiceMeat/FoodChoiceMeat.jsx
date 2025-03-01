import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FoodChoiceMeat.module.scss";
import { Spin } from "antd";
import { useGetChoiceQuery } from "../../api/mealby";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FoodChoiceMeat = () => {
  const { data, error, isLoading } = useGetChoiceQuery();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  if (isLoading) {
    return (
      <div className={styles.loadingcontainer}>
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return <p className={styles.errorText}>Error: {error.message}</p>;
  }

  return (
    <div className={styles.container}>
      <h2>by Choice of Meat</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        centeredSlides={true}
        grabCursor={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        modules={[Autoplay, Navigation, Pagination]}
        className={styles.swiperContainer}
      >
        {data?.meals?.map((ingredientData) => (
          <SwiperSlide key={ingredientData.strIngredient}>
            <div
              className={styles.card}
              onClick={() => {
                navigate(`/ingredient/${ingredientData.strIngredient}`);
                scrollToTop();
              }}
            >
              <img
                src={`https://www.themealdb.com/images/ingredients/${ingredientData.strIngredient}.png`}
                alt={ingredientData.strIngredient}
                className={styles.ingredientImage}
              />
              <p>{ingredientData.strIngredient}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FoodChoiceMeat;
