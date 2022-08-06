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
    updateAddressForUser: builder.mutation({
      query: (data) => {
        const { _id, ...body } = data;
        return {
          url: `users/${_id}`,
          method: 'PATCH',
          body,
        };
      },
      invalidatesTags: (result, error, { _id }) => [{ type: 'User', _id }],
    }),
    deleteAddressForUser: builder.mutation({
      query: (id) => {
        return {
          url: `users/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (result, error, id) => [{ type: 'User', id }],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useUpdateAddressForUserMutation,
  useDeleteAddressForUserMutation,
} = userApi;
