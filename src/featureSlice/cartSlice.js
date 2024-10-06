import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    quantity: 0
};

export const cartSystem = createSlice({
    name: "cartItem",
    initialState,
    reducers: {
        addCart: (state, action) => {
            const find = state.cart.findIndex(item => item.id === action.payload.id)
            if (find > 0) {
                state.cart[find].quantity += 1
            } else {
                const temp = { ...action.payload, quantity: 1 }
                state.cart.push(temp);
            }
        },

        incrementQuantity: (state, action) => {
            const find = state.cart.findIndex(item => item.id === action.payload);
            if (find >= 0) {
                state.cart[find].quantity += 1;
            }
        },

        decrementQuantity: (state, action) => {
            const find = state.cart.findIndex(item => item.id === action.payload);
            if (find >= 0 && state.cart[find].quantity > 1) {
                state.cart[find].quantity -= 1;
            }
        },

        removeCartItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },

        setCart: (state, action) => {
            state.cart = action.payload;
        }
    }
})

export const { addCart, incrementQuantity, decrementQuantity, removeCartItem, setCart } = cartSystem.actions;
export default cartSystem.reducer;