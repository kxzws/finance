import { IModalProps } from '../../types/interfaces';
import close from '../../assets/close.svg';
import * as M from './styled';

const Modal = (props: IModalProps) => {
  const { children, isOpen, onClose } = props;

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
