import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from "../../service/api";

export const fetchfoodCategory = createAsyncThunk(
  "foodCategory/fetchfoodCategory",
  async (categoryName) => { 
    return await api.fetchAllfoodCategory(categoryName);
  }
);

const foodCategorySlice = createSlice({
  name: 'foodCategory',
  initialState: {
    list: [],
    loading: false,
    error: null
  },
  extraReducers: builder => {
    builder
      .addCase(fetchfoodCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchfoodCategory.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.list = payload;
      })
      .addCase(fetchfoodCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const foodCategoryReducer = foodCategorySlice.reducer;
