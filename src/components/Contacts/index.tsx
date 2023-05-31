import { useContext, useEffect } from "react";
import { ContactContext } from "../../providers";
import { getDate } from "../../utils";
import { Container } from "../Container";
import { StyledContact, StyledSectionContacts } from "./style";
import { Button } from "../Button";

export const Contacts = () => {
  const { isLoadingContact, contacts, listContact } =
    useContext(ContactContext);

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
          <Button>Adicionar contato</Button>
        </div>
        {contacts.length > 0 &&
          contacts.map((contact, index) => {
            return (
              <StyledContact key={index} id={contact.id}>
                <div className="info-card">
                  <h3 className="title-contact-card">
                    Nome: {contact.firstName} {contact.lastName}
                  </h3>
                  <p className="text-contact-card">email: {contact.email}</p>
                  <p className="text-contact-card">phone: {contact.phone}</p>
                  <p className="text-contact-card">
                    Criado em: {getDate(contact.createdAt)}
                  </p>
                </div>
                <div className="buttons-case">
                  <Button>Editar</Button>
                </div>
              </StyledContact>
            );
          })}
      </Container>
    </StyledSectionContacts>
  );
};
