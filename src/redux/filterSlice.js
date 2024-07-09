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
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveFilter(state, action) {
      state.activeFilter = action.payload;
    },
  },
});

export const { setActiveFilter } = filterSlice.actions;
export default filterSlice.reducer;
