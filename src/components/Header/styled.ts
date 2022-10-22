import styled from 'styled-components';

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

export const WalletButton = styled.button`
  margin-right: 16px;
  padding: 16px 22px;
  font-size: ${({ theme }) => theme.fonts.sizes.subtitle}rem;
  font-weight: ${({ theme }) => theme.fonts.weights.w500};
  color: #fff;
  background-color: ${({ theme }) => theme.colors.bg};
  border: none;
  border-radius: 25px;
  box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
  transition: transform ${({ theme }) => theme.durations.ms200}ms ease 0s;

  &:hover {
    transform: translateY(-2px);
  }

  @media screen and ${({ theme }) => theme.media.laptop} {
    padding: 12px 18px;
  }
`;
