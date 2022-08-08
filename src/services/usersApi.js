import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    //modify base url:TODO:and modify static id
    baseUrl: `${process.env.REACT_APP_BASE_URL}api/v1/users`, //process.env.REACT_APP_BASE_URL  http://localhost:5000/api/v1/users
  }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `/${id}`, //if you want to test add "62ec135c16eeaa1abda160b2"
      transformResponse: (response, meta, error) => response.data,
      providesTags: (result, error, id) => [{ type: 'Users', id }],
    }),
    updateAddressForUser: builder.mutation({
      query: (data) => {
        const { _id, ...body } = data;
        return {
          url: `/${_id}`,
          method: 'PATCH',
          body,
        };
      },
      invalidatesTags: (result, error, { _id }) => [{ type: 'Users', _id }],
    }),
    deleteAddressForUser: builder.mutation({
      query: (id) => {
        return {
          url: `/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (result, error, id) => [{ type: 'Users', id }],
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateAddressForUserMutation,
  useDeleteAddressForUserMutation,
} = usersApi;
