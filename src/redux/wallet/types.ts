import { RateData } from '../../api/types';

export interface WalletData {
  data: RateData;
  amount: number;
}

export interface WalletState {
  oldData: WalletData[];
  newData: RateData[];
  isLoading: boolean;
  error: Error | null;
}
