import styled from 'styled-components';

export const StyledCurrency = styled.section`
  padding: 20px 0;
`;

export const FlexInfo = styled.div`
  display: flexbox;
  justify-content: space-between;
  align-items: center;
  row-gap: 10px;
  flex-wrap: wrap;
`;

export const FlexTitle = styled.div`
  margin-bottom: 30px;
  display: flexbox;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 10px;
  flex-wrap: wrap;
`;

export const AddButton = styled.button`
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
  }
`;
