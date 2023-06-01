import { useContext } from "react";
import { ContactContext } from "../../providers";
import { useForm } from "react-hook-form";
import { AddContactData } from "../../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddContactSchema } from "./validator";
import { Input } from "../Input";
import { Button } from "../Button";
import { StyledEditProfileForm } from "./style";

export const AddContactForm = () => {
  const { isLoadingContact, createContact } = useContext(ContactContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddContactData>({
    resolver: zodResolver(AddContactSchema),
  });

  return (
    <StyledEditProfileForm onSubmit={handleSubmit(createContact)}>
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

      <Button type="submit">Adicionar</Button>
      {isLoadingContact && <span>Carregando...</span>}
    </StyledEditProfileForm>
  );
};
