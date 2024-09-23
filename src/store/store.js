import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart.slice";
import productsSlice from "./products.slice";


export const store = configureStore({
	reducer: {
		cart: cartSlice,
		products: productsSlice
	}
});