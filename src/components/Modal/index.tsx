import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { StyledModal } from "./style";
import { Button } from "../Button";

interface ModalProps {
  form?: ReactNode;
  handleModal: (form: ReactNode) => void;
}

export const Modal = ({ form, handleModal }: ModalProps) => {
  const closeModal = () => {
    handleModal(null);
  };

  return form
    ? createPortal(
        <StyledModal>
          <div>
            <Button type="button" onClick={closeModal}>
              Fechar
            </Button>
            {form}
          </div>
        </StyledModal>,
        document.body
      )
    : null;
};
