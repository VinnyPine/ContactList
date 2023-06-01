import { z } from "zod";

export const EditProfileSchema = z
  .object({
    firstName: z.string().nonempty("Nome é obrigatório"),
    lastName: z.string().nonempty("Sobrenome é obrigatório"),
    email: z
      .string()
      .email("Deve ser um e-mail")
      .nonempty("Email é obrigatório"),
    phone: z
      .string()
      .nonempty("Telefone é obrigatório")
      .min(11, "Telefone deve ter 11 digitos")
      .max(11, "Telefone deve ter 11 digitos")
      .regex(/^(\d{2})9(\d{8})$/, "Telefone inválido"),
    password: z.string(),
    confirmPassword: z.string(),
    isAdmin: z.string().transform((value) => (value === "true" ? true : false)),
  })
  .partial()
  .refine((data) => data.password === data.confirmPassword, {
    message: "Confirmação de senha não combina",
    path: ["confirmPassword"],
  })
  .refine(({ password }) => !password || password?.length >= 8, {
    message: "Senha precisa ter mais que 8 digitos",
    path: ["password"],
  });
