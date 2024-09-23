import { createSlice } from "@reduxjs/toolkit";

//id, count

const initialState = {
	items:  [
		{
		  id: 1,
		  title: "Apple BYZ S852I",
		  price: "2927",
		  rate: "4.7",
		  image: "/images/Image.png",
		},
		{
		  id: 2,
		  title: "Apple EarPods",
		  price: "2327",
		  rate: "4.5",
		  image: "/images/Image2.png",
		},
		{
		  id: 3,
		  title: "Apple EarPods 3",
		  price: "2327",
		  rate: "4.5",
		  image: "/images/Image3.png",
		},
		{
		  id: 4,
		  title: "Apple BYZ S852I",
		  price: "2927",
		  rate: "4.7",
		  image: "/images/Image.png",
		},
		{
		  id: 5,
		  title: "Apple EarPods",
		  price: "2327",
		  rate: "4.5",
		  image: "/images/Image2.png",
		},
		{
		  id: 6,
		  title: "Apple EarPods 3",
		  price: "2327",
		  rate: "4.5",
		  image: "/images/Image3.png",
		},
	  ]
}

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {

	}
});

export default productsSlice.reducer;
export const cartActions = productsSlice.actions;