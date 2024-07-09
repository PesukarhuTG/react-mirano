import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../const';

export const fetchGoods = createAsyncThunk('goods/fetchGoods', async () => {
  const res = await fetch(`${API_URL}/api/products`);
  const data = await res.json();
  return data;
});

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
      .addCase(fetchGoods.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.status = 'success';
        state.items = action.payload;
      })
      .addCase(fetchGoods.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default goodsSlice.reducer;
