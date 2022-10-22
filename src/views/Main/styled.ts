import styled from 'styled-components';

export const StyledMain = styled.main`
  padding: 20px 0 40px;
  min-height: 90vh;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const PageButton = styled.button`
  margin: 0 16px;
  padding: 8px 12px;
  font-size: 20px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.bg};
  border: none;
  border-radius: 20px;
  transition: background-color ${({ theme }) => theme.durations.ms150}ms ease,
    transform ${({ theme }) => theme.durations.ms150}ms ease;

  &:disabled {
    background-color: rgba(0, 0, 0, 0.5);
  }

  &:hover {
    transform: scale(1.05);

    &:disabled {
      transform: none;
    }
  }
`;

export const FirstPageButton = styled.button`
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
`;
