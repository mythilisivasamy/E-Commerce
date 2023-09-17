import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const PRODUCTS_URL = 'http://localhost:8000/api/products';

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
export const saveReview = createAsyncThunk(
  'products/saveReview',
  async (review) => {
    try {
      const response = await axios.post(
        `${PRODUCTS_URL}/saveReview/${review.id}`,
        {
          name: review.name,
          rating: review.rating,
          comment: review.comment,
        }
      );
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

export const fetchReview = createAsyncThunk(
  'products/fetchReview',
  async (id) => {
    try {
      const response = await axios.get(`${PRODUCTS_URL}/fetchReview/${id}`);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setStatus:(state)=>{
      state.status='idle';
    }
  },
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
      })
      .addCase(saveReview.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(saveReview.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(saveReview.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchReview.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReview.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reviews = action.payload;
      })
      .addCase(fetchReview.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setStatus } = productSlice.actions;
export const selectStatus = (state) => state.products.status;
export const selectError = (state) => state.products.error;
export const selectAllProducts = (state) => state.products.products;
export const selectProductBySlug = (state, slug) =>
  state.products.products.find((product) => product.slug === slug);

export const selectReviews = (state) => state.products.reviews;
export default productSlice.reducer;
