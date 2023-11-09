/* eslint-disable no-empty-pattern */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
  initialState: {
    data: [],
    isloading: false,
  },
  reducers: {
    updateLocation: (state, action) => {
      state.location = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.isloading = false;
        state.data = action.payload;
      })
      .addCase(fetchProduct.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.isloading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { updateLocation } = productSlice.actions;

export default productSlice.reducer;
