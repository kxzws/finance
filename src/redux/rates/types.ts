import { RateData } from '../../api/types';

export interface RatesState {
  top: RateData[];
  rates: RateData[];
  search: string;
  limit: number;
  offset: number;
  isLoading: boolean;
  error: Error | null;
}
