import { IModalProps } from '../../types/interfaces';
import close from '../../assets/close.svg';
import * as M from './styled';

const Modal = ({ children, isOpen, onClose }: IModalProps) => {
  return (
    <>
      <M.StyledOverlay
        isOpen={isOpen}
        onClick={() => {
          onClose();
        }}
      />

      <M.StyledModal isOpen={isOpen}>
        <M.CloseButton
          type="button"
          onClick={() => {
            onClose();
          }}
        >
          <img src={close} alt="close the modal" />
        </M.CloseButton>
        {children}
      </M.StyledModal>
    </>
  );
};

export default Modal;
