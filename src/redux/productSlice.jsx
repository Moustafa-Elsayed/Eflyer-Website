/* eslint-disable no-empty-pattern */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: [],
};

export const fetchProduct = createAsyncThunk(
  "productSlice/fetchProduct",
  async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      // Assuming the API responds with JSON data
      return response.data;
    } catch (error) {
      // Handle any errors here
      throw error;
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = productSlice.actions;

export default productSlice.reducer;
