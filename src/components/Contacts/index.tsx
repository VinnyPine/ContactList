import { ReactNode, useContext, useEffect } from "react";
import { ContactContext } from "../../providers";
import { getDate } from "../../utils";
import { Container } from "../Container";
import { StyledContact, StyledSectionContacts } from "./style";
import { Button } from "../Button";
import { AddContactForm } from "../AddContactForm";
import { EditContactForm } from "../EditContactForm";
import { ButtonGeneratePdf } from "../ButtonGeneratePdf";

interface ContactsProps {
  handleModal: (form: ReactNode | null) => void;
}

export const Contacts = ({ handleModal }: ContactsProps) => {
  const { isLoadingContact, contacts, listContact } =
    useContext(ContactContext);
  const { setSelectedContact } = useContext(ContactContext);

  useEffect(() => {
    listContact();
  }, []);

  return (
    <StyledSectionContacts>
      <Container>
        <div>
          <h2 className="title-contact">
            Contatos {isLoadingContact && " - Carregando..."}
          </h2>
          <ButtonGeneratePdf />
          <Button
            onClick={() => {
              handleModal(<AddContactForm />);
            }}
          >
            Adicionar contato
          </Button>
        </div>
        {contacts.length > 0 &&
          contacts.map((contact, index) => {
            return (
              <StyledContact
                key={index}
                id={contact.id}
                className="contact-card"
              >
                <div className="info-card">
                  <h3 className="title-contact-card">
                    Nome: {contact.firstName} {contact.lastName}
                  </h3>
                  <p className="text-contact-card">Email: {contact.email}</p>
                  <p className="text-contact-card">Telefone: {contact.phone}</p>
                  <p className="text-contact-card">
                    Criado em: {getDate(contact.createdAt)}
                  </p>
                </div>
                <div className="buttons-case">
                  <Button
                    onClick={() => {
                      setSelectedContact(contact);
                      handleModal(
                        <EditContactForm handleModal={handleModal} />
                      );
                    }}
                  >
                    Editar
                  </Button>
                </div>
              </StyledContact>
            );
          })}
      </Container>
    </StyledSectionContacts>
  );
};
