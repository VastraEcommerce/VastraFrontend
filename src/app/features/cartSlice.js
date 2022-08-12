import { createSlice } from "@reduxjs/toolkit";

// const DeleteAdress = ( arrayOfAddress ) => {
//     const addressArray = arrayOfAddress.filter( ( object ) => {
//         return object._id !== thisAddress._id;
//     } );
// }
const initialState = {
    pretotal: 0,
    currentTotal: 0
};
export const cartSlice = createSlice( {
    name: 'TotalPrice',
    initialState,
    reducers: {
        calcToTalPrice: ( state, total ) => {
            // state.pretotal = total
            // state.currentTotal = state.pretotal + total

        }
    }
} )
export const { calcToTalPrice } = cartSlice.actions;
