import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from "../../service/api";

export const fetchfoodDetail = createAsyncThunk(
  "foodDetail/fetchfoodDetail", 
  async (mealId) => { 
    return await api.fetchAllfoodDetail(mealId); 
  }
);

const foodDetailSlice = createSlice({
  name: 'foodDetail',
  initialState: {
    list: [],
    loading: false,
    error: null
  },
  extraReducers: builder => {
    builder
      .addCase(fetchfoodDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchfoodDetail.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.list = payload;
      })
      .addCase(fetchfoodDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const foodDetailReducer = foodDetailSlice.reducer;
