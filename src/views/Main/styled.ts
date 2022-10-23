import styled from 'styled-components';
import SecondaryButton from '../../styled/SecondaryButton';

export const StyledMain = styled.main`
  padding: 20px 0 40px;
  min-height: 90vh;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const PageButton = styled(SecondaryButton)`
  margin: 0 16px;
  padding: 8px 12px;
  transition: background-color ${({ theme }) => theme.durations.ms150}ms ease;

  &:disabled {
    background-color: rgba(0, 0, 0, 0.5);
  }

  &:hover:disabled {
    transform: none;
  }
`;

export const FirstPageButton = styled.button`
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
`;
