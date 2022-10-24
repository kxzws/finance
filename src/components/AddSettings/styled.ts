import styled from 'styled-components';
import PrimaryButton from '../../styled/PrimaryButton';

export const StyledAddSettings = styled.section`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const AddInput = styled.input`
  padding: 8px 12px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
`;

export const AddButton = styled(PrimaryButton)`
  margin: 20px 0 0;
  padding: 12px 18px;

  &:hover:disabled {
    transform: none;
  }

  &:disabled {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
