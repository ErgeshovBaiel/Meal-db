import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";


export const foodByCountry = createApi({
    reducerPath: "foodByCountry",
    baseQuery,
    endpoints: (builder) => ({
        getByCountry: builder.query({ 
            query: (countryName) => `/filter.php?a=${countryName}`
        })
    })
});

export const { useGetByCountryQuery } = foodByCountry;
