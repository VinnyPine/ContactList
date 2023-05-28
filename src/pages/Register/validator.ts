import { z } from "zod";

export const RegisterSchema = z
  .object({
    firstName: z.string().nonempty("Nome é obrigatório"),
    lastName: z.string().nonempty("Sobrenome é obrigatório"),
    email: z
      .string()
      .email("Deve ser um e-mail")
      .nonempty("Email é obrigatório"),
    phone: z.string().nonempty("Telefone é obrigatória"),
    password: z.string().min(8).nonempty("Senha é obrigatória"),
    confirmPassword: z.string().nonempty("Confirmação de senha é obrigatória"),
    isAdmin: z.string().transform((value) => (value === "true" ? true : false)),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Confirmação de senha não combina",
    path: ["confirmPassword"],
  });

export type RegisterData = z.infer<typeof RegisterSchema>;
