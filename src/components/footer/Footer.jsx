import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <hr />
      <div className={styles.logoContainer}>
        <img
          className={styles.logo}
          src='https://the-mealdb-mimo.netlify.app/static/media/logo-mealDB.fa8d1d09f74f7c7f2a8b07b85e928f02.svg'
          alt='MealDB Logo'
        />
      </div>
    </div>
  );
};

export default Footer;
