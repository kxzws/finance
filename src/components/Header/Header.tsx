import styled from 'styled-components';
import useTypedSelector from '../../hooks/useTypedSelector';
import CenterContainer from '../../styled/CenterContainer';
import FlexWrapper from '../../styled/FlexWrapper';
import baseTheme from '../../theme';
import * as F from '../../styled/Fonts';

const StyledHeader = styled.header`
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

const Wallet = styled.div`
  margin-left: auto;
  max-width: 300px;
  display: flexbox;
  justify-content: space-between;
  align-items: center;
`;

const WalletButton = styled.button`
  padding: 12px 18px;
  font-size: ${({ theme }) => theme.fonts.sizes.subtitle};
  font-weight: ${({ theme }) => theme.fonts.weights.w500};
  color: #fff;
  background-color: ${({ theme }) => theme.colors.bg};
  border: none;
  border-radius: 25px;
  box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
  transition: transform 0.2s ease 0s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Header = () => {
  const { top } = useTypedSelector((state) => state.rates);

  return (
    <StyledHeader>
      <CenterContainer>
        <FlexWrapper justifyContent="flex-start" alignItems="center">
          {top.map((item) => {
            const price = Number(parseFloat(item.priceUsd).toFixed(2));
            const percent = Number(parseFloat(item.changePercent24Hr).toFixed(2));

            const isPositive = percent > 0;

            return (
              <div>
                <F.Subtitle color={baseTheme.colors.primary}>{item.name}</F.Subtitle>
                <FlexWrapper justifyContent="flex-start" alignItems="baseline">
                  <F.Text1 color={baseTheme.colors.primary} mRight={8}>
                    ${price}
                  </F.Text1>
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
          <Wallet>
            <WalletButton>Портфель</WalletButton>
          </Wallet>
        </FlexWrapper>
      </CenterContainer>
    </StyledHeader>
  );
};

export default Header;
