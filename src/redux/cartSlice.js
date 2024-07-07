import { createSlice } from '@reduxjs/toolkit';

const cartItems = JSON.parse(localStorage.getItem('cart_mirano') || '[]');

const totalCartSize = !cartItems
  ? 0
  : cartItems.reduce((sum, item) => {
      return sum + item.count;
    }, 0);

const totalCartSum = !cartItems
  ? 0
  : cartItems.reduce((sum, item) => {
      return sum + item.count * item.price;
    }, 0);

const initialState = {
  isOpen: false,
  cartItems,
  countItems: totalCartSize,
  sum: totalCartSum,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart(state) {
      state.isOpen = !state.isOpen;
    },
    addItemToCart(state, action) {
      const { id, img, title, price, count = 1 } = action.payload; //получаем данные

      const existingItem = state.cartItems.find((item) => item.id === id); //есть ли в корзине undefind/элемент

      if (existingItem) {
        existingItem.count = existingItem.count + 1; // ...то изменяем только количество
      } else {
        state.cartItems.push({ id, img, title, price, count }); // ...иначе добавляем новые данные
      }

      state.countItems = state.cartItems.reduce((sum, item) => {
        //по измененному количеству считаем итог
        return sum + item.count;
      }, 0);

      state.sum = state.cartItems.reduce((sum, item) => {
        return sum + item.count * item.price;
      }, 0);

      localStorage.setItem('cart_mirano', JSON.stringify(state.cartItems));
    },
  },
});

export const { toggleCart, addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
