import { configureStore } from '@reduxjs/toolkit'
import { categoryReducer } from './slice/categorySlice'
import { foodCategoryReducer } from './slice/foodCategorySlice'

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    foodCategory: foodCategoryReducer,
  }
})
