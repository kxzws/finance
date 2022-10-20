import { RateData } from '../api/types';

export interface ITableProps {
  data: RateData[];
  loadData: () => void;
  isLoading: boolean;
}

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}
