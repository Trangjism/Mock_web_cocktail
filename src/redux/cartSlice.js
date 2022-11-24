import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   cart: [      
    {
        name: '',
        img: '',
        price: 0,      
        id: '',
        amount: 0
    }
    ]
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        updateCartItems: (state,action) => {
            state.cart = [...state.cart, action.payload]            
        },
        deleteItem: (state, action) => {
            for (var i = 0; i < state.cart.length; i++) {
                var obj = state.cart[i];            
                if (obj.id == action.payload) {
                    state.cart.splice(i, 1);
                }
            }                   
        },
        plusAmount:(state, action) => {
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id == action.payload) {
                    state.cart[i].amount += 1;
                }
            }          
            
        },
            
        minusAmount:(state, action) => {
            for (let i = 0; i < state.cart.length; i++) {
                if (state.cart[i].id == action.payload) {
                    state.cart[i].amount -= 1;
                }
            }     
            
        },
        

    }
})

export const {updateCartItems} = cartSlice.actions;
export const {deleteItem} = cartSlice.actions;
export const {plusAmount} = cartSlice.actions;
export const {minusAmount} = cartSlice.actions;
export default cartSlice.reducer;