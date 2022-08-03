import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi( {
    reducerPath: 'users',
    baseQuery: fetchBaseQuery( {
        baseUrl: `${ process.env.REACT_APP_BASE_URL }api/v1/users`,
    } ),
    tagTypes: [ 'users' ],
    endpoints: ( builder ) => ( {

        getUser: builder.query( {
            query: ( id ) => `/${ id }`,
            transformResponse: ( response, meta, error ) => response.data,
            providesTags: [ 'users' ],
        } )
    } ),
} );

export const {
    useGetUserQuery,

} = usersApi;

