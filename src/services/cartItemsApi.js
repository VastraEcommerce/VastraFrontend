import { apiSlice } from '../app/api/apiSlice';

export const cartItemApi = apiSlice.injectEndpoints({
  tagTypes: ['Cart'],
  endpoints: (builder) => ({
    getAllCartItemsForCurrentUser: builder.query({
      query: () => '/cartItems',
      transformResponse: (response, meta, error) => response.data,
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.map(({ _id }) => ({
                type: 'Cart',
                _id,
              })),
              'Cart',
            ]
          : ['Cart'],
    }),
    getCartItemById: builder.query({
      query: (id) => `/cartItems/${id}`,
      transformResponse: (response, meta, error) => response.data,
      providesTags: ['Cart'],
    }),
    addCartItem: builder.mutation({
      query: (cartItem) => ({
        url: `/cartItems`,
        method: 'POST',
        body: cartItem,
      }),
      invalidatesTags: ['Cart'],
    }),
    removeCartItem: builder.mutation({
      query: (id) => ({
        url: `/cartItems/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Cart'],
    }),
    updateCartItem: builder.mutation({
      query: (id, updates) => ({
        url: `/cartItems/${id}`,
        method: 'PATCH',
        body: updates,
      }),
      invalidatesTags: ['Cart'],
    }),
  }),
});

export const {
  useGetAllCartItemsForCurrentUserQuery,
  useGetCartItemByIdQuery,
  useAddCartItemMutation,
  useRemoveCartItemMutation,
  useUpdateCartItemMutation,
} = cartItemApi;
