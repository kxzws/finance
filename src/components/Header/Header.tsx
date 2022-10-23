import { useEffect, useState } from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import useAppDispatch from '../../hooks/useAppDispatch';
import parseFixedFloat from '../../utils/parseFixedFloat';
import getPercentChange from '../../utils/getPercentChange';
import constants from '../../utils/constants';
import { RateData } from '../../api/types';
import { WalletData } from '../../redux/wallet/types';
import getTopRatesData from '../../redux/top/thunks';
import baseTheme from '../../theme';
import CenterContainer from '../../styled/CenterContainer';
import FlexWrapper from '../../styled/FlexWrapper';
import Modal from '../Modal/Modal';
import Loading from '../../styled/Loading';
import Wallet from '../Wallet/Wallet';
import * as F from '../../styled/Fonts';
import * as H from './styled';

const Header = () => {
  const { top, isLoading } = useTypedSelector((state) => state.top);
  const { oldData, newData } = useTypedSelector((state) => state.wallet);

  const dispatch = useAppDispatch();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const calcWalletChanges = (
    old: WalletData[] = oldData,
    actual: RateData[] = newData
  ): { oldSum: number; newSum: number; sumChange: number } => {
    const data = old.map((item) => item.data);
    const am = old.map((item) => item.amount);

    let oldSum = 0;
    let newSum = 0;
    let sumChange = 0;

    if (old.length > 0) {
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

      if (oldSum === 0 && newSum === 0) {
        sumChange = constants.WALLET.NULL_CHANGE;
      } else if (newSum === 0) {
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

  const { oldSum, newSum, sumChange } = calcWalletChanges();

  useEffect(() => {
    dispatch(getTopRatesData());
  }, [dispatch]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleWalletBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <H.StyledHeader>
        <CenterContainer>
          <H.FlexHeader>
            {isLoading ? (
              <Loading />
            ) : (
              top.map((item) => {
                const price = Number(parseFixedFloat(item.priceUsd, 2));
                const percent = Number(parseFixedFloat(item.changePercent24Hr, 2));

                const isPositive = percent > 0;

                return (
                  <div key={item.id}>
                    <F.Subtitle>{item.name}</F.Subtitle>
                    <FlexWrapper justifyContent="flex-start" alignItems="baseline">
                      <F.Text1 mRight={8}>${price}</F.Text1>
                      <F.Text1
                        color={isPositive ? baseTheme.colors.success : baseTheme.colors.error}
                        mRight={35}
                      >
                        {percent}%
                      </F.Text1>
                    </FlexWrapper>
                  </div>
                );
              })
            )}
            <H.Wallet>
              <H.WalletButton type="button" onClick={handleWalletBtnClick}>
                Портфель
              </H.WalletButton>
              <F.Subtitle mRight={10}>{newSum.toFixed(2)} USD</F.Subtitle>
              <F.Text1
                mRight={8}
                color={newSum - oldSum > 0 ? baseTheme.colors.success : baseTheme.colors.error}
              >
                {newSum - oldSum > 0 ? '+' : null}
                {(newSum - oldSum).toFixed(4)}
              </F.Text1>
              <F.Text1 color={sumChange > 0 ? baseTheme.colors.success : baseTheme.colors.error}>
                ({sumChange}%)
              </F.Text1>
            </H.Wallet>
          </H.FlexHeader>
        </CenterContainer>
      </H.StyledHeader>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Wallet />
      </Modal>
    </>
  );
};

export default Header;
