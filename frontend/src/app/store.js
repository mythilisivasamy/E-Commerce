import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/products/productsSlice';
import userReducer from '../features/users/usersSlice';
import cartReducer from '../features/cart/cartSlice';
const store = configureStore({
  reducer: {
    products: productReducer,
    user: userReducer,
    cart: cartReducer,
  },
});
export default store;
