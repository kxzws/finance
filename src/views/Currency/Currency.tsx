import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import CenterContainer from '../../styled/CenterContainer';

const StyledCurrency = styled.section`
  padding: 20px 0;
`;

const Currency = () => {
  const { id } = useParams();

  return (
    <StyledCurrency>
      <CenterContainer>{id}</CenterContainer>
    </StyledCurrency>
  );
};

export default Currency;
