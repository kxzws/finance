import { RateData } from '../../api/types';

export interface RatesState {
  rates: RateData[];
  limit: number;
  offset: number;
  isLoading: boolean;
  error: Error | null;
}
