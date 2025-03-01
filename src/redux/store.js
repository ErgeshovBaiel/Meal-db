import { configureStore } from '@reduxjs/toolkit'
import { mealby } from '../api/mealby'

export const store = configureStore({
  reducer: {
    [mealby.reducerPath]: mealby.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(mealby.middleware)
})
