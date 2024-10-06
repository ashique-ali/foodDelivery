import { configureStore } from "@reduxjs/toolkit";
import cartSystem from "../featureSlice/cartSlice";

export const store = configureStore({
    reducer: {
        cartItem: cartSystem
    },
});