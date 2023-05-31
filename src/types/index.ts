import { ReactNode } from "react";
import { RegisterSchema } from "../pages/Register/validator";
import { LoginSchema } from "../pages/Login/validator";
import { z } from "zod";

export interface ClientProps {
  children: ReactNode;
}

export interface ClientValues {
  isLoadingClient: boolean;
  user: Client | null;
  infoMessage: string;
  registerClient: (data: RegisterData) => Promise<void>;
  loginClient: (data: LoginData) => Promise<void>;
  verifyToken: () => Promise<void>;
}

export interface Client {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  isAdmin: boolean;
  createdAt: Date;
}

export interface ContactProps {
  children: ReactNode;
}

export interface ContactValues {
  isLoadingContact: boolean;
  contacts: Contact[];
  listContact: () => Promise<void>;
}

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  createdAt: Date;
}

export type RegisterData = z.infer<typeof RegisterSchema>;
export type LoginData = z.infer<typeof LoginSchema>;
