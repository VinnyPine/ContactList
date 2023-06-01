import { z } from "zod";

export const AddContactSchema = z.object({
  firstName: z.string().nonempty("Nome é obrigatório"),
  lastName: z.string().nonempty("Sobrenome é obrigatório"),
  email: z.string().email("Deve ser um e-mail").nonempty("Email é obrigatório"),
  phone: z
    .string()
    .nonempty("Telefone é obrigatório")
    .max(11, "Telefone só pode ter 11 digitos"),
});
