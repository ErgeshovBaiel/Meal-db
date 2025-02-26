import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";

export const foodDetail = createApi({
    reducerPath: "foodDetail",
    baseQuery,
    endpoints: (builder) => ({
        getFoodDetail: builder.query({
            query: (mealId) => `/lookup.php?i=${mealId}`,
        }),
    }),
});

export const { useGetFoodDetailQuery } = foodDetail;
