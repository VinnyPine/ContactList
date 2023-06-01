import { createContext, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import {
  AddContactData,
  Contact,
  ContactProps,
  ContactValues,
  EditContactData,
} from "../types";

export const ContactContext = createContext({} as ContactValues);

export const ContactProvider = ({ children }: ContactProps) => {
  const navigate = useNavigate();
  const [isLoadingContact, setisLoadingContact] = useState(false);

  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState<Contact>(
    {} as Contact
  );

  const createContact = async (data: AddContactData) => {
    const token = localStorage.getItem("@contacts-list:token");

    if (!token) {
      navigate("/");
      return;
    }

    try {
      setisLoadingContact(true);
      await api.post("/contacts", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      listContact();
    } catch (error) {
      console.error(error);
    } finally {
      setisLoadingContact(false);
    }
  };

  const listContact = async () => {
    const token = localStorage.getItem("@contacts-list:token");

    if (!token) {
      navigate("/");
      return;
    }

    try {
      setisLoadingContact(true);
      const response = await api.get("/contacts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setContacts(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setisLoadingContact(false);
    }
  };

  const editContact = async (data: EditContactData, contactId: string) => {
    const token = localStorage.getItem("@contacts-list:token");

    if (!token) {
      navigate("/");
      return;
    }

    try {
      setisLoadingContact(true);
      await api.patch(`/contacts/${contactId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      listContact();
    } catch (error) {
      console.error(error);
    } finally {
      setisLoadingContact(false);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        isLoadingContact,
        contacts,
        selectedContact,
        setSelectedContact,
        createContact,
        listContact,
        editContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
