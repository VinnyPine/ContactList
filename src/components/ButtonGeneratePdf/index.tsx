import { useContext } from "react";
import { StyledButtonGeneratePdf } from "./style";
import { ClientContext, ContactContext } from "../../providers";
import { generatePdf } from "./generatePdf";

export const ButtonGeneratePdf = () => {
  const { user } = useContext(ClientContext);
  const { contacts } = useContext(ContactContext);

  const createPdf = () => {
    generatePdf(user, contacts);
  };

  return (
    <StyledButtonGeneratePdf type="button" onClick={createPdf}>
      PDF
    </StyledButtonGeneratePdf>
  );
};
