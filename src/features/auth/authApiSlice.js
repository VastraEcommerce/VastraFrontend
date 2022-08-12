import { apiSlice } from '../../app/api/apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/users/login',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    signUp: builder.mutation({
      query: (body) => ({
        url: `/users/signup`,
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = authApiSlice;
