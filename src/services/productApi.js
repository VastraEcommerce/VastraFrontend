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

    addProduct: builder.mutation({
      query: product => ({
        url: "products",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Product"]
    }),

    uploadProductImages: builder.mutation({
      query: images => ({
        url: "products/upload",
        method: "POST",
        body: images,
      }),
      invalidatesTags: ["Product"]
    }),

    updateProduct: builder.mutation({
      query: product => ({
        url: `products/${product.id}`,
        method: "PUT",
        body: product,
      }),
      invalidatesTags: ["Product"]
    }),

    deleteProduct: builder.mutation({
      query: id => ({
        url: `products/${id}`,
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
  useUploadProductImagesMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
