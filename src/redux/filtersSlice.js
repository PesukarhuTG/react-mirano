import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../const';

export const fetchFilterType = createAsyncThunk(
  'filter/fetchFilterType',
  async (type) => {
    const res = await fetch(`${API_URL}/api/products?type=${type}`);
    const data = await res.json();
    return data;
  }
);

const initialState = {
  activeFilter: 'bouquets',
  minPrice: '',
  maxPrice: '',
  category: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeType(state, action) {
      state.activeFilter = action.payload;
      state.minPrice = '';
      state.maxPrice = '';
      state.category = '';
    },
    changePrice(state, action) {
      state[action.payload.name] = action.payload.value;
    },
    changeCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const { changeType, changePrice, changeCategory } = filtersSlice.actions;
export default filtersSlice.reducer;
