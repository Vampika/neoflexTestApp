import { createSlice } from "@reduxjs/toolkit";

//id, count

const initialState = {
	items: []
}

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		add: (state, action) => {
			const existed = state.items.find(i => i.id === action.payload);
			if (!existed) {
				state.items.push({ id: action.payload, count: 1 });
				return;
			}
			else {
				state.items.map(i => {
					if (i.id === action.payload)
						i.count += 1;
					return i;
				})
			}
		},
		decrease: (state, action) => {
			const existed = state.items.find(i => i.id === action.payload);
			if (existed) {
				if (existed.count === 1) {
					return;
				}
				else
					state.items.map(i => {
						if (i.id === action.payload)
							i.count -= 1;
						return i;
					});
				return;
			}
			return;
		},
		delete: (state, action) => {
			state.items = state.items.filter(i => i.id !== action.payload);

		}
	}
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;