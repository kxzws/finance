import styled from 'styled-components';
import CenterContainer from '../../styled/CenterContainer';
import * as F from '../../styled/Fonts';

const StyledNotFound = styled.section`
  padding: 20px 0;
`;

const NotFouned = () => {
  return (
    <StyledNotFound>
      <CenterContainer>
        <F.Title1 mTop={80}>404</F.Title1>
        <F.Subtitle>Страница не найдена</F.Subtitle>
      </CenterContainer>
    </StyledNotFound>
  );
};

export default NotFouned;
