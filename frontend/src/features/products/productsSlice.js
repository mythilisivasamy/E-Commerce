import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const PRODUCTS_URL = 'http://localhost:8000/api/products/';

const initialState = {
  products: [],
  status: 'idle',
  error: '',
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const response = await axios.get(`${PRODUCTS_URL}`);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = state.products.concat(action.payload);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectStatus = (state) => state.products.status;
export const selectError = (state) => state.products.error;
export const selectAllProducts = (state) => state.products.products;
export const selectProductBySlug = (state, slug) =>
  state.products.products.find((product) => product.slug === slug);
export default productSlice.reducer;
