import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchRatesData from '../../api/service';

const getRatesData = createAsyncThunk(
  'rates/getRatesData',
  async (data: { search: string; limit: number; offset: number }, { rejectWithValue }) => {
    try {
      const { search, limit, offset } = data;
      const response = await fetchRatesData(search, limit, offset);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export default getRatesData;
