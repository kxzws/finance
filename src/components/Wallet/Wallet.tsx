import { useEffect } from 'react';
import useAppDispatch from '../../hooks/useAppDispatch';
import useTypedSelector from '../../hooks/useTypedSelector';
import { walletSlice } from '../../redux/wallet/slices';
import getWalletNewData from '../../redux/wallet/thunks';
import baseTheme from '../../theme';
import * as F from '../../styled/Fonts';
import * as W from './styled';

const Wallet = () => {
  const { oldData, newData, amount, isLoading } = useTypedSelector((state) => state.wallet);

  const { getFromLocalStorage, removeFromWallet } = walletSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWalletNewData(oldData));
  }, [dispatch, oldData]);

  return (
    <W.StyledWallet>
      <F.Title2 mBottom={20}>Портфель</F.Title2>
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
            {oldData.map((item) => {
              const newDataItem = newData.filter((curr) => curr.id === item.id);
              const oldPrice = Number(parseFloat(item.priceUsd).toFixed(2));
              const newPrice = newDataItem[0]
                ? Number(parseFloat(newDataItem[0].priceUsd).toFixed(2))
                : 0;

              const percent = (((newPrice - oldPrice) / newPrice) * 100).toFixed(4);

              const isPositive = oldPrice < newPrice;

              return (
                <W.TableRow key={item.id}>
                  <W.TableCell>
                    <F.Subtitle>{item.name}</F.Subtitle>
                  </W.TableCell>
                  <W.TableCell>{amount[item.id]}</W.TableCell>
                  <W.TableCell>${oldPrice}</W.TableCell>
                  <W.TableCell>${newPrice}</W.TableCell>
                  <W.TableCell>
                    <F.Text1 color={isPositive ? baseTheme.colors.success : baseTheme.colors.error}>
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
  );
};

export default Wallet;
