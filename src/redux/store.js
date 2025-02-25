import { configureStore } from '@reduxjs/toolkit'
import { categoryReducer } from './slice/categorySlice'
import { foodCategoryReducer } from './slice/foodCategorySlice'
import { foodDetailReducer } from './slice/foodDetailSlice'
import { foodByCountry } from "../api/foodByCountry";


export const store = configureStore({
  reducer: {
    category: categoryReducer,
    foodCategory: foodCategoryReducer,
    foodDetail: foodDetailReducer,
    [foodByCountry.reducerPath]: foodByCountry.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(foodByCountry.middleware)
})
