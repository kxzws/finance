import { RateData } from '../../api/types';

export type CurrencyAmount = {
  [id: string]: number;
};

export interface WalletState {
  oldData: RateData[];
  newData: RateData[];
  amount: Partial<CurrencyAmount>;
  isLoading: boolean;
  error: Error | null;
}
