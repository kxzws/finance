import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSearchCurrencyData } from '../../api/service';
import { RateData } from '../../api/types';

const getWalletNewData = createAsyncThunk(
  'wallet/getWalletNewData',
  async (data: RateData[], { rejectWithValue }) => {
    try {
      const search = data.map((item) => item.id);
      const response = await fetchSearchCurrencyData(search);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export default getWalletNewData;
