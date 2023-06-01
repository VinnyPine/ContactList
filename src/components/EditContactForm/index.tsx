import { useContext } from "react";
import { ContactContext } from "../../providers";
import { useForm } from "react-hook-form";
import { EditContactData } from "../../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditContactSchema } from "./validator";
import { Input } from "../Input";
import { Button } from "../Button";
import { StyledEditProfileForm } from "./style";

export const EditContactForm = () => {
  const { isLoadingContact, editContact, selectedContact } =
    useContext(ContactContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditContactData>({
    resolver: zodResolver(EditContactSchema),
    defaultValues: {
      firstName: selectedContact.firstName,
      lastName: selectedContact.lastName,
      email: selectedContact.email,
      phone: selectedContact.phone,
    },
  });

  const handleEdit = (data: EditContactData) => {
    const validatedData: any = {};

    const keys = ["firstName", "lastName", "email", "phone"] as const;

    keys.forEach((key) => {
      if (data[key] !== selectedContact[key]) {
        validatedData[key] = data[key];
      }
    });

    if (Object.keys(validatedData).length > 0) {
      editContact(validatedData, selectedContact.id);
    }
  };

  return (
    <StyledEditProfileForm onSubmit={handleSubmit(handleEdit)}>
      <Input
        type="text"
        name="firstName"
        register={register}
        text="Nome"
        errorMessage={errors?.firstName?.message}
      />
      <Input
        type="text"
        name="lastName"
        register={register}
        text="Sobrenome"
        errorMessage={errors?.lastName?.message}
      />
      <Input
        type="text"
        name="email"
        register={register}
        text="Email"
        errorMessage={errors?.email?.message}
      />
      <Input
        type="text"
        name="phone"
        register={register}
        text="Telefone"
        errorMessage={errors?.phone?.message}
      />

      <Button type="submit">Salvar</Button>
      {isLoadingContact && <span>Carregando...</span>}
    </StyledEditProfileForm>
  );
};
