import { apiSlice } from '../app/api/apiSlice';

export const currentUserApi = apiSlice.injectEndpoints( {
  tagTypes: [ 'CurrentUser' ],
  endpoints: ( builder ) => ( {
    getMe: builder.query( {
      query: () => `/users/me`,
      transformResponse: ( response, meta, error ) => response.data,
      providesTags: [ 'CurrentUser' ],
    } ),
    updateMe: builder.mutation( {
      query: ( updates ) => ( {
        url: '/users/updateMe',
        method: 'PATCH',
        body: updates,
      } ),
      invalidatesTags: [ 'CurrentUser' ],
    } ),
    deleteMe: builder.mutation( {
      query: () => ( {
        url: '/users/deleteMe',
        method: 'DELETE',
      } ),
      invalidatesTags: [ 'CurrentUser' ],
    } ),
  } ),
} );

export const { useGetMeQuery, useUpdateMeMutation, useDeleteMeMutation } =
  currentUserApi;
