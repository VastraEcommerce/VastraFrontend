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

    addProduct: builder.mutation({
      query: product => ({
        url: "/",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Product"]
    }),

    updateProduct: builder.mutation({
      query: product => ({
        url: `/${product.id}`,
        method: "PUT",
        body: product,
      }),
      invalidatesTags: ["Product"]
    }),

    deleteProduct: builder.mutation({
      query: id => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"]
    }),

  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useGetProductReviewsQuery,

  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
