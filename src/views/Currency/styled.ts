import styled from 'styled-components';
import PrimaryButton from '../../styled/PrimaryButton';

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

export const AddButton = styled(PrimaryButton)`
  padding: 12px 18px;
  max-width: 160px;
  min-width: 90px;
  flex: 1 1 200px;
`;
