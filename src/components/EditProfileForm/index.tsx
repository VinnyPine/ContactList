import { ReactNode, useContext, useState } from "react";
import { ClientContext } from "../../providers";
import { useForm } from "react-hook-form";
import { EditProfileData } from "../../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditProfileSchema } from "./validator";
import { Input } from "../Input";
import { InputRadio } from "../InputRadio";
import { Button } from "../Button";
import { StyledEditProfileForm } from "./style";

interface EditProfileProps {
  handleModal: (form: ReactNode) => void;
}

export const EditProfileForm = ({ handleModal }: EditProfileProps) => {
  const { isLoadingClient, user, editClient, removeClient } =
    useContext(ClientContext);
  const [exclude, setExclude] = useState<boolean>(false);
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

  const toggleExclude = () => {
    setExclude((prev) => !prev);
  };

  const deleteUser = async () => {
    await removeClient(user.id);
    handleModal(null);
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

      <div className="buttons-case">
        {exclude ? (
          <>
            <Button type="submit" variant="error" onClick={deleteUser}>
              Sim
            </Button>
            <Button type="button" onClick={toggleExclude}>
              cancelar
            </Button>
          </>
        ) : (
          <>
            <Button type="submit">Salvar</Button>
            <Button type="button" variant="error" onClick={toggleExclude}>
              Apagar perfil
            </Button>
          </>
        )}
      </div>
      {isLoadingClient && <span>Carregando...</span>}
    </StyledEditProfileForm>
  );
};
