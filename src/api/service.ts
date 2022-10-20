import { coincapInstance } from './instance';
import { HistoryData, Interval, RatesData } from './types';
import constants from '../utils/constants';

export const fetchRatesData = async (
  limit: number = constants.API.defaultLimit,
  offset: number = constants.API.defaultOffset
): Promise<RatesData> => {
  try {
    const QUERY_URL = 'assets';
    const response = await coincapInstance.get(QUERY_URL, {
      params: {
        limit,
        offset,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const fetchSearchCurrencyData = async (search: string[]): Promise<RatesData> => {
  try {
    const QUERY_URL = 'assets';
    const response = await coincapInstance.get(QUERY_URL, {
      params: {
        ids: search,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const fetchCurrencyData = async (search: string): Promise<RatesData> => {
  try {
    const QUERY_URL = 'assets';
    const response = await coincapInstance.get(QUERY_URL, {
      params: {
        search,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const fetchCurrencyHistory = async (
  id: string,
  interval: Interval = 'h1'
): Promise<HistoryData> => {
  try {
    const QUERY_URL = `assets/${id}/history`;
    const response = await coincapInstance.get(QUERY_URL, {
      params: {
        interval,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
