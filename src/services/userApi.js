import { apiSlice } from '../app/api/apiSlice';

export const userApi = apiSlice.injectEndpoints({
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => `/users`,
      keepUnusedDataFor: 5,
      transformResponse: (response, meta, error) => response.data,
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.map(({ _id }) => ({
                type: 'User',
                _id,
              })),
              'User',
            ]
          : ['User'],
    }),
    getUserById: builder.query({
      query: (id) => `users/${id}`,
      transformResponse: (response, meta, error) => response.data,
      providesTags: ['User'],
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUserByIdQuery } = userApi;
