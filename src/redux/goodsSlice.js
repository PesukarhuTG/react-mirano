import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../const';

export const fetchAllGoods = createAsyncThunk(
  'goods/fetchAllGoods',
  async () => {
    const res = await fetch(`${API_URL}/api/products`);
    const data = await res.json();
    return data;
  }
);

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllGoods.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllGoods.fulfilled, (state, action) => {
        state.status = 'success';
        state.items = action.payload;
      })
      .addCase(fetchAllGoods.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default goodsSlice.reducer;
