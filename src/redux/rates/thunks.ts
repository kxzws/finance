import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRatesData } from '../../api/service';

const getRatesData = createAsyncThunk(
  'rates/getRatesData',
  async (data: { limit: number; offset: number }, { rejectWithValue }) => {
    try {
      const { limit, offset } = data;
      const response = await fetchRatesData(limit, offset);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export default getRatesData;
