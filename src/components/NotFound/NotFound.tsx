import styled from 'styled-components';
import CenterContainer from '../../styled/CenterContainer';

const StyledNotFound = styled.section`
  padding: 20px 0;
`;

const NotFouned = () => {
  return (
    <StyledNotFound>
      <CenterContainer>not found</CenterContainer>
    </StyledNotFound>
  );
};

export default NotFouned;
