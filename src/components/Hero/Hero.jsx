import React from 'react'
import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.container}>
      <img
        src='https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2272&q='
        alt=''
      />
      <div className={styles.block}>
      <h2>
        Delicious Meal Inspiration
      </h2>
      <h3> & Recipes</h3>
        <p>
          Explore by Category, Ingredient, Country, Name or First Letter
        </p>
      </div>
    </div>
  )
}

export default Hero
