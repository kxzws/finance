import { RateData } from '../api/types';

export interface ITableProps {
  data: RateData[];
  loadData: () => void;
  isLoading: boolean;
}
