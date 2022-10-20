import styled from 'styled-components';

const AddButton = styled.button`
  height: 20px;
  width: 20px;
  font-size: 16px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.bg};
  border: none;
  border-radius: 50%;
  transition: transform ${({ theme }) => theme.durations.ms150}ms ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  table & {
    display: none;
  }
`;

export default AddButton;
