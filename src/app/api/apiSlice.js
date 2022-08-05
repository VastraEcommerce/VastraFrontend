import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logOut, setCredentials } from '../../features/auth/authSlice';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000/api/v1',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  console.log('wrapper');
  console.log(result?.error?.status === 403);
  console.log({ result });
  console.log({ isPersist: api.getState().auth.persist });

  if (result?.error?.status === 403 || api.getState().auth.persist) {
    console.log(`sending refresh token`);
    // send refresh token to get new access token
    const refreshResult = await baseQuery('/users/refresh', api, extraOptions);
    console.log({ refreshResult });
    if (refreshResult?.data) {
      const user = api.getState().auth.user;

      // store the new token
      api.dispatch(setCredentials({ token: refreshResult.data.token, user }));

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getNewAccessToken: builder.query({
      query: () => `/users/refresh`,
      transformResponse: (response, meta, arg) => response?.token,
    }),
  }),
});

export const { useGetNewAccessTokenQuery, useLazyGetNewAccessTokenQuery } =
  apiSlice;
