import styled from 'styled-components';

export const StyledOverlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const StyledModal = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  width: 60%;
  position: fixed;
  top: 14%;
  left: 20%;
  z-index: 7;
  background-color: #fff;
  border-radius: 8px;

  @media screen and ${({ theme }) => theme.media.tablet} {
    width: 80%;
    left: 10%;
  }

  @media screen and ${({ theme }) => theme.media.mobileM} {
    width: 95%;
    left: 2.5%;
  }
`;

export const CloseButton = styled.button`
  margin: 15px;
  padding: 0;
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;
`;
