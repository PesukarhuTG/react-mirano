import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import modalReducer from './modalSlice';
import goodsReducer from './goodsSlice';
import filterReducer from './filterSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    goods: goodsReducer,
    filter: filterReducer,
  },
});

export default store;
