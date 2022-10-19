import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RateData } from '../../api/types';
import getTopRatesData from './thunks';
import { TopState } from './types';

const initialState: TopState = {
  top: [],
  isLoading: false,
  error: null,
};

export const topSlice = createSlice({
  name: 'top',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTopRatesData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTopRatesData.fulfilled, (state, action: PayloadAction<RateData[]>) => {
        state.top = action.payload;
        state.isLoading = false;
      })
      .addCase(getTopRatesData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as Error;
      });
  },
});

export default topSlice.reducer;
