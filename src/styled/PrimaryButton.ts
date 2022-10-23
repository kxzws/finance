import styled from 'styled-components';

const PrimaryButton = styled.button`
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
`;

export default PrimaryButton;
