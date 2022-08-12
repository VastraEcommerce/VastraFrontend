import { apiSlice } from '../app/api/apiSlice';

export const orderApi = apiSlice.injectEndpoints({
  tagTypes: ['Order'],
  endpoints: (builder) => ({
    getOrdersForCurrentUser: builder.query({
      query: () => `/orders`,
      transformResponse: (response, meta, error) => response.data,
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.map(({ _id }) => ({
                type: 'Order',
                _id,
              })),
              'Order',
            ]
          : ['Order'],
    }),
    getOrderById: builder.query({
      query: (id) => `/orders/${id}`,
      transformResponse: (response, meta, error) => response.data,
      providesTags: ['Order'],
    }),
    addOrder: builder.mutation({
      query: (order) => ({
        url: '/orders',
        method: 'POST',
        body: order,
      }),
    }),
    removeOrder: builder.mutation({
      query: (id) => ({
        url: `/orders/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Order'],
    }),
    updateOrder: builder.mutation({
      query: (id, status) => ({
        url: `/orders/${id}`,
        method: 'PATCH',
        body: { status },
      }),
      invalidatesTags: ['Order'],
    }),
  }),
});

export const {
  useGetOrdersForCurrentUserQuery,
  useGetOrderByIdQuery,
  userAddOrderMutaion,
  userRemoveOrderMutaion,
  userUpdateOrderMutaion,
} = orderApi;
