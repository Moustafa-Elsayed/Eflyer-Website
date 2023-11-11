import { createSlice } from "@reduxjs/toolkit";

// Load cart state from local storage (if available)
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Error loading cart state from local storage:", err);
    return undefined;
  }
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: loadStateFromLocalStorage() || [],
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
      localStorage.removeItem("cart");
    },
  },
});

export const { addToCart, deleteFromCart, clear } = cartSlice.actions;

export default cartSlice.reducer;
