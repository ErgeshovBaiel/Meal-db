import { configureStore } from "@reduxjs/toolkit"; 
import { category } from "../api/category"; 
import { foodCategory } from "../api/foodCategory"; 
import { foodDetail } from "../api/foodDetail"; 
import { foodByCountry } from "../api/foodByCountry";


export const store = configureStore({
    reducer: {
        [category.reducerPath]: category.reducer,
        [foodCategory.reducerPath]: foodCategory.reducer,
        [foodDetail.reducerPath]: foodDetail.reducer,
        [foodByCountry.reducerPath]: foodByCountry.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(category.middleware)
            .concat(foodCategory.middleware)
            .concat(foodDetail.middleware)
            .concat(foodByCountry.middleware),
});
