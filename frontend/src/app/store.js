import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/products/productsSlice';
import userReducer from '../features/users/usersSlice';
const store = configureStore({
  reducer: {
    products: productReducer,
    users: userReducer,
  },
});
export default store;
