import { coincapInstance } from './instance';
import { RatesData } from './types';
import constants from '../utils/constants';

const fetchRatesData = async (
  search: string,
  limit: number = constants.API.defaultLimit,
  offset: number = constants.API.defaultOffset
): Promise<RatesData> => {
  try {
    const QUERY_URL = 'assets';
    const response = await coincapInstance.get(QUERY_URL, {
      params: {
        search,
        limit,
        offset,
      },
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default fetchRatesData;
