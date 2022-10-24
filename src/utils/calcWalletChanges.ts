import constants from './constants';
import getPercentChange from './getPercentChange';
import { RateData } from '../api/types';
import { WalletData } from '../redux/wallet/types';

const calcWalletChanges = (
  old: WalletData[],
  actual: RateData[]
): { oldSum: number; newSum: number; sumChange: number } => {
  const data = old.map((item) => item.data);
  const am = old.map((item) => item.amount);

  let oldSum = 0;
  let newSum = 0;
  let sumChange = 0;

  if (old.length) {
    oldSum = data
      .map((item, ind) => parseFloat(item.priceUsd) * am[ind])
      .reduce((acc, curr) => acc + curr);

    newSum = data
      .map((item, ind) => {
        let newPrice = '0';
        actual.forEach((sameItem) => {
          if (item.id === sameItem.id) {
            newPrice = sameItem.priceUsd;
          }
        });

        return parseFloat(newPrice) * am[ind];
      })
      .reduce((acc, curr) => acc + curr);

    if (!oldSum && !newSum) {
      sumChange = constants.WALLET.NULL_CHANGE;
    } else if (!newSum) {
      sumChange = constants.WALLET.FULL_CHANGE;
    } else {
      sumChange = parseFloat(getPercentChange(oldSum, newSum).toFixed(4));
    }
  }

  return {
    oldSum,
    newSum,
    sumChange,
  };
};

export default calcWalletChanges;
