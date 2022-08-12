import { apiSlice } from '../app/api/apiSlice';

export const checkoutApi = apiSlice.injectEndpoints( {
    tagTypes: [ 'Checkout' ],
    endpoints: ( builder ) => ( {
        getCheckoutSession: builder.query( {
            query: () => '/create-checkout-session',
            transformResponse: ( response, meta, error ) => response.data,
            providesTags: [ "Checkout" ]
        } ),
    } ),
}
)
export const {
    usegetCheckoutSessionQuery,

} = checkoutApi;