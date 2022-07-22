import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const vastraApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/' }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `products/`,
        }),
    }),
})

export const { useGetAllProductsQuery } = vastraApi