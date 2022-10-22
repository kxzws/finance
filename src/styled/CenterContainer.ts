import styled from 'styled-components';

const CenterContainer = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.containerXL}px;

  @media screen and ${({ theme }) => theme.media.laptop} {
    max-width: ${({ theme }) => theme.container}px;
  }

  @media screen and ${({ theme }) => theme.media.midLapTab} {
    padding: 0 20px;
  }
`;

export default CenterContainer;
