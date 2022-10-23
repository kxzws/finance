import styled from 'styled-components';
import PrimaryButton from '../../styled/PrimaryButton';

export const StyledHeader = styled.header`
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};

  @media screen and ${({ theme }) => theme.media.mobileM} {
    padding: 10px 0;
  }
`;

export const FlexHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 20px;

  @media screen and (max-width: 728px) {
    justify-content: center;
  }

  @media screen and ${({ theme }) => theme.media.mobileM} {
    row-gap: 10px;
  }
`;

export const Wallet = styled.div`
  margin-left: auto;
  display: flexbox;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 728px) {
    margin-left: 0;
  }
`;

export const WalletButton = styled(PrimaryButton)`
  margin-right: 16px;
  padding: 16px 22px;

  @media screen and ${({ theme }) => theme.media.laptop} {
    padding: 12px 18px;
  }
`;
