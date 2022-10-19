import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RateData } from '../../api/types';
import constants from '../../utils/constants';
import getRatesData from './thunks';
import { RatesState } from './types';

const initialState: RatesState = {
  rates: [],
  search: '',
  limit: constants.API.defaultLimit,
  offset: constants.API.defaultOffset,
  isLoading: false,
  error: null,
};

export const ratesSlice = createSlice({
  name: 'rates',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRatesData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getRatesData.fulfilled, (state, action: PayloadAction<RateData[]>) => {
        state.rates = action.payload;
        state.isLoading = false;
      })
      .addCase(getRatesData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as Error;
      });
  },
});

export default ratesSlice.reducer;
