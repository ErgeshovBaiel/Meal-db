import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './FoodLetter.module.scss';
import { alphabet } from './letterData';

const FoodLetter = () => {
  const navigate = useNavigate();

  const handleClick = (letter) => {
    navigate(`/letter/${letter}`);
  };

  return (
    <div className={styles.foodLetter}>
      <hr />
      <h2>by First Letter</h2>
      <div className={styles.alphabet}>
        {alphabet.map((item, index) => (
          <div
            key={index}
            className={styles.letter}
            onClick={() => handleClick(item.letter)}
            style={{ cursor: 'pointer' }}
          >
            {item.letter}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodLetter;
