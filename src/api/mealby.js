import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from './baseQuery'

export const mealby = createApi({
  reducerPath: 'foodByCountry',
  baseQuery,
  endpoints: builder => ({
    getCategory: builder.query({
      query: () => '/categories.php'
    }),
    getChoice: builder.query({
        query: () => "/list.php?i=list",
    }),
    getByCountry: builder.query({
      query: countryName => `filter.php?a=${countryName}`
    }),
    searchByName: builder.query({
      query: name => `search.php?s=${name}`
    }),
    getIngredient: builder.query({
      query: ingredientName => `filter.php?i=${ingredientName}`
    }),
    getFoodByCategory: builder.query({
      query: categoryName => `/filter.php?c=${categoryName}`
    }),
    getFoodDetail: builder.query({
      query: mealId => `/lookup.php?i=${mealId}`
    })
  })
})

export const {
  useGetByCountryQuery,
  useSearchByNameQuery,
  useGetIngredientQuery,
  useGetFoodByCategoryQuery,
  useGetFoodDetailQuery,
  useGetCategoryQuery,
  useGetChoiceQuery 
} = mealby
