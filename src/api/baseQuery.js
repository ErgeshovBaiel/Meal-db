import {fetchBaseQuery}  from "@reduxjs/toolkit/query/react"

export const baseQuery = fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/api/json/v1/1"
})
