import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RateData } from '../../api/types';
import getWalletNewData from './thunks';
import { CurrencyAmount, WalletState } from './types';

const initialState: WalletState = {
  oldData: [],
  newData: [],
  amount: {},
  isLoading: false,
  error: null,
};

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    getFromLocalStorage(
      state,
      action: PayloadAction<{ data: RateData[]; amount: Partial<CurrencyAmount> }>
    ) {
      const { data, amount } = action.payload;
      state.oldData = data;
      state.amount = amount;
    },
    addToWallet(state, action: PayloadAction<{ data: RateData; amount: number }>) {
      const { data, amount } = action.payload;
      const amountCopy = { ...state.amount, [data.id]: amount };

      state.oldData.push(data);
      state.amount = amountCopy;
    },
    removeFromWallet(state, action: PayloadAction<RateData>) {
      const { id } = action.payload;
      const data = state.oldData.slice();

      state.oldData = data.filter((item) => item.id !== id);
      delete state.amount[id];
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
