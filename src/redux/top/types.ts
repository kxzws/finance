import { RateData } from '../../api/types';

export interface TopState {
  top: RateData[];
  isLoading: boolean;
  error: Error | null;
}
