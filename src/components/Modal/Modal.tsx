import styled from 'styled-components';
import { IModalProps } from '../../types/interfaces';
import close from '../../assets/close.svg';

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
  width: 40%;
  position: fixed;
  top: 14%;
  left: 30%;
  z-index: 7;
  background-color: #fff;
  border-radius: 8px;
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

const Modal = (props: IModalProps) => {
  const { children, isOpen, onClose } = props;

  return (
    <>
      <StyledOverlay
        isOpen={isOpen}
        onClick={() => {
          onClose();
        }}
      />

      <StyledModal isOpen={isOpen}>
        <CloseButton
          type="button"
          onClick={() => {
            onClose();
          }}
        >
          <img src={close} alt="close the modal" />
        </CloseButton>
        {children}
      </StyledModal>
    </>
  );
};

export default Modal;
