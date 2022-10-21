import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RateData } from '../../api/types';
import getWalletNewData from './thunks';
import { WalletData, WalletState } from './types';

const initialState: WalletState = {
  oldData: [],
  newData: [],
  isLoading: false,
  error: null,
};

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    getFromLocalStorage(state, action: PayloadAction<WalletData[]>) {
      state.oldData = action.payload;
    },
    addToWallet(state, action: PayloadAction<WalletData>) {
      state.oldData.push(action.payload);
    },
    removeFromWallet(state, action: PayloadAction<number>) {
      const walletIndex = action.payload;

      const oldD = state.oldData.slice();
      state.oldData = oldD.filter((_, ind) => ind !== walletIndex);
    },
    cleanNewData(state) {
      state.newData = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWalletNewData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getWalletNewData.fulfilled, (state, action: PayloadAction<RateData[]>) => {
        state.newData = action.payload;
        state.isLoading = false;
      })
      .addCase(getWalletNewData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as Error;
      });
  },
});

export default walletSlice.reducer;
