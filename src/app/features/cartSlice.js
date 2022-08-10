import { createSlice } from "@reduxjs/toolkit";


const initialState = [];
export const cartSlice = createSlice( {
    name: 'shoppingBag',
    initialState,
    reducers: {
        addProduct: ( state, product ) => {
            state.push( product )
        }
    }
} )
export const { addProduct } = cartSlice.actions;
