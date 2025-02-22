import { createSlice, createAsyncThunk } from '@reduxjs/toolkit' 
import {api} from  "../../service/api"

export const fetchCategory = createAsyncThunk("category/fetchCategory" ,
     async () => { 
        return await api.fetchAllCategory();
      }
    );

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    list: [],
    loading: false,
    erorr: null
  },
  extraReducers: builder => {
    builder 
        .addCase(fetchCategory.pending , (state) => {
            state.loading = true;
        })
        .addCase(fetchCategory.fulfilled , (state , {payload}) => {
            state.loading = false;
            state.list = payload
        })
        .addCase(fetchCategory.rejected , () => {})
  }
})

export const categoryReducer = categorySlice.reducer;
