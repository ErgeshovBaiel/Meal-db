import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from "../../service/api";

export const fetchfoodCountry = createAsyncThunk(
  "foodCountry/fetchfoodCountry", 
  async (countryName) => { 
    return await api.fetchAllfoodCountry(countryName); 
  }
);


const foodCountrySlice = createSlice({
  name: 'foodCountry',
  initialState: {
    list: [],
    loading: false,
    error: null
  },
  extraReducers: builder => {
    builder
      .addCase(fetchfoodCountry.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchfoodCountry.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.list = payload;
      })
      .addCase(fetchfoodCountry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const foodCountryReducer = foodCountrySlice.reducer;
