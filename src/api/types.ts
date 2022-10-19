export type Interval = 'm1' | 'm5' | 'm15' | 'm30' | 'h1' | 'h2' | 'h6' | 'h12' | 'd1';

export type RateData = {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string | null;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
};

export type RatesData = {
  data: RateData[];
  timestamp: number;
};

export type HistoryData = {
  data: CurrencyHistoryData[];
  timestamp: number;
};

export type CurrencyHistoryData = {
  priceUsd: string;
  time: number;
};
