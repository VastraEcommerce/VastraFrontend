import { apiSlice } from '../app/api/apiSlice';

export const productApi = apiSlice.injectEndpoints({
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/products`,
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
      query: (id) => `products/${id}`,
      transformResponse: (response, meta, error) => response.data,
      providesTags: ['Product'],
    }),
    getProductReviews: builder.query({
      query: (productId) => `products/${productId}/reviews`,
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
