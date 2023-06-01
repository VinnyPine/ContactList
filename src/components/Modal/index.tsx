import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { StyledModal } from "./style";
import { Button } from "../Button";

interface ModalProps {
  form?: ReactNode;
  setFormModal: React.Dispatch<React.SetStateAction<ReactNode>>;
}

export const Modal = ({ form, setFormModal }: ModalProps) => {
  const closeModal = () => {
    setFormModal(null);
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
