import styled from 'styled-components';

const SecondaryButton = styled.button`
  font-size: 20px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.bg};
  border: none;
  border-radius: 20px;
  transition: transform ${({ theme }) => theme.durations.ms150}ms ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export default SecondaryButton;
