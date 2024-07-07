import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  items: JSON.parse(localStorage.getItem('cart') || '[]'),
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

      const existingItem = state.items.find((item) => item.id === id); //если они совпадают с уже находящимся в корзине

      if (existingItem) {
        existingItem.count = count; // ...то изменяем только количество
      } else {
        state.items.push({ id, img, title, price, count }); // ...иначе добавляем новые данные
      }

      localStorage.setItem('cart', JSON.stringify(state.items));
    },
  },
});

export const { toggleCart, addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
