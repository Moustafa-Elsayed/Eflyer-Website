import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    deleteFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clear: (state, action) => {},
  },
});

export const { addToCart, deleteFromCart, clear } = cartSlice.actions;

export default cartSlice.reducer;
