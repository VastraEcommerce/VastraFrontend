import { apiSlice } from '../app/api/apiSlice';

export const checkoutApi = apiSlice.injectEndpoints({
  tagTypes: ['Checkout'],
  endpoints: (builder) => ({
    getCheckoutSession: builder.mutation({
      query: () => ({ url: '/users/create-checkout-session', method: 'POST' }),
      providesTags: ['Checkout'],
    }),
  }),
});
export const { useGetCheckoutSessionMutation } = checkoutApi;
