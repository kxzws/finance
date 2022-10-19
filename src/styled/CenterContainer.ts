import styled from 'styled-components';

const CenterContainer = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.container}px;
`;

export default CenterContainer;
