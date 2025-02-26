import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";

export const foodCategory = createApi({
    reducerPath: "foodCategory",
    baseQuery,
    endpoints: (builder) => ({
        getFoodByCategory: builder.query({
            query: (categoryName) => `/filter.php?c=${categoryName}`,
        }),
    }),
});

export const { useGetFoodByCategoryQuery } = foodCategory;
