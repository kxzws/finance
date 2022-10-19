import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchRatesData from '../../api/service';

const TOP_LIMIT = 3;

const getTopRatesData = createAsyncThunk(
  'rates/getTopRatesData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchRatesData('', TOP_LIMIT);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export default getTopRatesData;
