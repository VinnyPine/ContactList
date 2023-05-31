import { createContext, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { Contact, ContactProps, ContactValues } from "../types";

// interface CreateContactData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   createdAt: Date;
// }

export const ContactContext = createContext({} as ContactValues);

export const ContactProvider = ({ children }: ContactProps) => {
  const navigate = useNavigate();
  const [isLoadingContact, setisLoadingContact] = useState(false);

  const [contacts, setContacts] = useState<Contact[]>([]);

  // const createContact = async (data: CreateContactData) => {
  //   try {
  //     setisLoadingContact(true);
  //     await api.post("/clients", data);

  //     navigate("/");
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setisLoadingContact(false);
  //   }
  // };

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

  return (
    <ContactContext.Provider
      value={{ isLoadingContact, contacts, listContact }}
    >
      {children}
    </ContactContext.Provider>
  );
};
