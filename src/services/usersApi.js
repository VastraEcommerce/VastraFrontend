import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi( {
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery( {    //modify base url:TODO:and modify static id
        baseUrl: `http://localhost:5000/api/v1/users`, //process.env.REACT_APP_BASE_URL
    } ),
    tagTypes: [ 'users' ],
    endpoints: ( builder ) => ( {

        getUser: builder.query( {
            query: ( id ) => `/62b86c60a0b5a3a8cbe33a06`,
            transformResponse: ( response, meta, error ) => response.data,
            providesTags: [ 'users' ],
        } )
    } ),
} );

export const {
    useGetUserQuery,

} = usersApi;

