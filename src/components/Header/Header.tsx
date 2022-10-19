import { useEffect } from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import useAppDispatch from '../../hooks/useAppDispatch';
import getTopRatesData from '../../redux/top/thunks';
import baseTheme from '../../theme';
import CenterContainer from '../../styled/CenterContainer';
import FlexWrapper from '../../styled/FlexWrapper';
import * as F from '../../styled/Fonts';
import * as H from './styled';

const Header = () => {
  const { top } = useTypedSelector((state) => state.top);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTopRatesData());
  }, [dispatch]);

  return (
    <H.StyledHeader>
      <CenterContainer>
        <FlexWrapper justifyContent="flex-start" alignItems="center">
          {top.map((item) => {
            const price = Number(parseFloat(item.priceUsd).toFixed(2));
            const percent = Number(parseFloat(item.changePercent24Hr).toFixed(2));

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
          })}
          <H.Wallet>
            <H.WalletButton>Портфель</H.WalletButton>
          </H.Wallet>
        </FlexWrapper>
      </CenterContainer>
    </H.StyledHeader>
  );
};

export default Header;
