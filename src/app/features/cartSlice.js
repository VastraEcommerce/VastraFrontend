import { createSlice } from "@reduxjs/toolkit";

// const DeleteAdress = ( arrayOfAddress ) => {
//     const addressArray = arrayOfAddress.filter( ( object ) => {
//         return object._id !== thisAddress._id;
//     } );
// }
const initialState = [];
export const cartSlice = createSlice( {
    name: 'shoppingBag',
    initialState,
    reducers: {
        addProduct: ( state, product ) => {
            state.push( product )
            console.log( state )
        },
        deleteProduct: ( state, product ) => {
            const NewState = state.filter( obj => {
                return obj.payload._id !== product._id
            } )
            console.log( NewState )
            state = [ ...NewState ]
        }
    }
} )
export const { addProduct, deleteProduct } = cartSlice.actions;
