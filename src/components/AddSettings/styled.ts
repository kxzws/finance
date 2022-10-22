import styled from 'styled-components';

export const StyledAddSettings = styled.section`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AddInput = styled.input`
  padding: 8px 12px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
`;

export const SuccessPar = styled.p<{ isSuccess: boolean }>`
  display: ${({ isSuccess }) => (isSuccess ? 'block' : 'none')};
`;

export const AddButton = styled.button`
  margin: 20px 0 0;
  padding: 12px 18px;
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

    &:disabled {
      transform: none;
    }
  }

  &:disabled {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
