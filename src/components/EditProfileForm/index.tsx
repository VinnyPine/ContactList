import { useContext } from "react";
import { ClientContext } from "../../providers";
import { useForm } from "react-hook-form";
import { EditProfileData, RegisterData } from "../../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditProfileSchema } from "./validator";
import { Input } from "../Input";
import { InputRadio } from "../InputRadio";
import { Button } from "../Button";
import { StyledEditProfileForm } from "./style";

export const EditProfileForm = () => {
  const { isLoadingClient, user, editClient } = useContext(ClientContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProfileData>({
    resolver: zodResolver(EditProfileSchema),
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
    },
  });

  const handleEdit = (data: EditProfileData) => {
    const validatedData: any = {};
    //era pra ser "EditProfileData", mas não consegui tirar o erro, me ajuda por favor

    const keys = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "isAdmin",
    ] as const;

    keys.forEach((key) => {
      if (data[key] !== user[key]) {
        validatedData[key] = data[key];
      }
    });

    if (data.password) {
      validatedData.password = data.password;
    }

    editClient(validatedData, user.id);
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
      <Input
        type="password"
        name="password"
        register={register}
        text="Senha"
        errorMessage={errors?.password?.message}
      />
      <Input
        type="password"
        name="confirmPassword"
        register={register}
        text="Confirmar senha"
        errorMessage={errors?.confirmPassword?.message}
      />

      <InputRadio register={register} defaultCheck={user.isAdmin} />

      <Button type="submit">Salvar</Button>
      {isLoadingClient && <span>Carregando...</span>}
    </StyledEditProfileForm>
  );
};
