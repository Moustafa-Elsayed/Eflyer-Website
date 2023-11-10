/* eslint-disable no-empty-pattern */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk(
  "productSlice/fetchProduct",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      // Assuming the API responds with JSON data
      return response.data;
    } catch (error) {
      // Handle any errors here
      return rejectWithValue(error.message);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    isloading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isloading = false;
        state.error = false;
      })
      .addCase(fetchProduct.pending, (state, action) => {
        console.log(action);
        state.isloading = true;
        state.error = false;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        console.log(action);
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { updateLocation } = productSlice.actions;

export default productSlice.reducer;
