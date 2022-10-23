import { useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import useAppDispatch from '../../hooks/useAppDispatch';
import useTypedSelector from '../../hooks/useTypedSelector';
import parseFixedFloat from '../../utils/parseFixedFloat';
import getPercentChange from '../../utils/getPercentChange';
import constants from '../../utils/constants';
import { walletSlice } from '../../redux/wallet/slices';
import getWalletNewData from '../../redux/wallet/thunks';
import { WalletData } from '../../redux/wallet/types';
import baseTheme from '../../theme';
import FlexWrapper from '../../styled/FlexWrapper';
import * as F from '../../styled/Fonts';
import * as W from './styled';

const Wallet = () => {
  const { oldData, newData } = useTypedSelector((state) => state.wallet);

  const { getFromLocalStorage, removeFromWallet } = walletSlice.actions;
  const dispatch = useAppDispatch();

  const [walletData, setWalletData] = useLocalStorage<WalletData[]>('kxzws-wallet', []);

  useEffect(() => {
    if (walletData.length > 0) {
      dispatch(getFromLocalStorage(walletData));
    }
  }, [dispatch, getFromLocalStorage]);

  useEffect(() => {
    const requestData = oldData.map((item) => item.data);
    dispatch(getWalletNewData(requestData));
    setWalletData(oldData);
  }, [dispatch, setWalletData, oldData]);

  const handleRemoveBtnClick = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(removeFromWallet(index));
  };

  return (
    <>
      <F.Title2 mTop={20} mLeft={20}>
        Портфель
      </F.Title2>
      <W.StyledWallet>
        {oldData.length > 0 ? (
          <W.StyledTable>
            <W.TableHead>
              <W.TableRow>
                {[
                  'Название',
                  'Количество',
                  'Стоимость покупки',
                  'Актуальная стоимость',
                  'Изменение',
                ].map((name) => (
                  <W.TableCell key={name}>
                    <F.Text2>{name}</F.Text2>
                  </W.TableCell>
                ))}
              </W.TableRow>
            </W.TableHead>
            <W.TableBody>
              {oldData.map((dataItem, ind) => {
                const item = dataItem.data;
                const { amount } = dataItem;

                const newDataItem = newData.filter((curr) => curr.id === item.id);
                const oldPrice = Number(parseFixedFloat(item.priceUsd, 2));
                const newPrice = newDataItem[0]
                  ? Number(parseFixedFloat(newDataItem[0].priceUsd, 2))
                  : 0;

                let percent: number | string;
                if (oldPrice === 0 && newPrice === 0) {
                  percent = constants.WALLET.NULL_CHANGE;
                } else if (newPrice === 0) {
                  percent = constants.WALLET.FULL_CHANGE;
                } else {
                  percent = getPercentChange(oldPrice, newPrice).toFixed(4);
                }

                const isPositive = oldPrice < newPrice;

                return (
                  <W.TableRow key={`${item.id + ind}`}>
                    <W.TableCell>
                      <FlexWrapper justifyContent="space-between" alignItems="baseline">
                        <F.Subtitle>{item.name}</F.Subtitle>
                        <W.RemoveButton
                          type="button"
                          onClick={(event) => handleRemoveBtnClick(event, ind)}
                        >
                          -
                        </W.RemoveButton>
                      </FlexWrapper>
                    </W.TableCell>
                    <W.TableCell>{amount}</W.TableCell>
                    <W.TableCell>${oldPrice}</W.TableCell>
                    <W.TableCell>${newPrice}</W.TableCell>
                    <W.TableCell>
                      <F.Text1
                        color={isPositive ? baseTheme.colors.success : baseTheme.colors.error}
                      >
                        {percent}%
                      </F.Text1>
                    </W.TableCell>
                  </W.TableRow>
                );
              })}
            </W.TableBody>
          </W.StyledTable>
        ) : (
          <F.Subtitle>Портфель пуст</F.Subtitle>
        )}
      </W.StyledWallet>
    </>
  );
};

export default Wallet;
