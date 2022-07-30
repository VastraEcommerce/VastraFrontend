import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BASE_URL}api/v1/products`,
  }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/`,
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.data.map(({ _id }) => ({
                type: 'Product',
                _id,
              })),
              'Product',
            ]
          : ['Product'],
    }),
    getProductById: builder.query({
      query: (id) => `/${id}`,
      providesTags: ['Product'],
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } = productApi;
