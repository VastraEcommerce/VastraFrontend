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
      transformResponse: (response, meta, error) => response.data,
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.map(({ _id }) => ({
                type: 'Product',
                _id,
              })),
              'Product',
            ]
          : ['Product'],
    }),
    getProductById: builder.query({
      query: (id) => `/${id}`,
      transformResponse: (response, meta, error) => response.data,
      providesTags: ['Product'],
    }),
    getProductReviews: builder.query({
      query: (productId) => `/${productId}/reviews`,
      transformResponse: (response, meta, arg) => response.data,
      providesTags: ['Reviews'],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetProductReviewsQuery,
} = productApi;
