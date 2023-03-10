import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { MovieProps } from 'types';


interface PostState {
  loading: boolean;
  error: string | null;
  data: MovieProps[] | null;
}

const initialState = {
  loading: false,
  error: null,
  data: null,
} as PostState;


export const productsFetch = createAsyncThunk(
  'products',
  async () => {
    const response = await axios.get('http://localhost:3000/products')
    return response?.data
  }
)

const productsSlice = createSlice({
  name:'products',
  initialState,
  reducers:{},
    extraReducers(builder) {
      builder
        .addCase(productsFetch.pending, (state, action) => {
          state.loading = true;
        })
        .addCase(productsFetch.fulfilled, (state, action: PayloadAction<MovieProps[]>) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(productsFetch.rejected, (state, action: PayloadAction<any>) => {
          state.error = action.payload;
        });
    
  }
})

export default productsSlice.reducer;