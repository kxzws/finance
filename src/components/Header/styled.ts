import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const Wallet = styled.div`
  margin-left: auto;
  display: flexbox;
  justify-content: space-between;
  align-items: center;
`;

export const WalletButton = styled.button`
  margin-right: 16px;
  padding: 12px 18px;
  font-size: ${({ theme }) => theme.fonts.sizes.subtitle};
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
`;
