import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload)
    },
    deleteFromCart: (state, action) => {
      
    },
    clear: (state, action) => {},
  },
});

export const { addToCart, deleteFromCart, clear } = cartSlice.actions;

export default cartSlice.reducer;
