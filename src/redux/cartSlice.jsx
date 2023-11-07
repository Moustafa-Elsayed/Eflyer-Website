import { createSlice } from "@reduxjs/toolkit";

// Load cart state from local storage (if available)
const initialState = JSON.parse(localStorage.getItem("cart")) || [];

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
        // Save the updated cart state to local storage
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    deleteFromCart: (state, action) => {
      const updatedState = state.filter(
        (product) => product.id !== action.payload.id
      );
      state.length = 0; // Clear the current state
      state.push(...updatedState); // Replace with the updated state
      // Save the updated cart state to local storage
      localStorage.setItem("cart", JSON.stringify(state));
    },
    clear: (state, action) => {
      state.length = 0; // Clear the cart state
      localStorage.removeItem("cart"); // Remove the cart state from local storage
    },
  },
});

export const { addToCart, deleteFromCart, clear } = cartSlice.actions;

export default cartSlice.reducer;
