import { RateData } from '../../api/types';

export interface RatesState {
  rates: RateData[];
  search: string;
  limit: number;
  offset: number;
  isLoading: boolean;
  error: Error | null;
}
