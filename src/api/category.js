import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";

export const category = createApi({
    reducerPath: "category",
    baseQuery,
    endpoints: (builder) => ({
        getCategory: builder.query({
            query: () => "/categories.php",
        }),
    }),
});

export const { useGetCategoryQuery } = category;
