import axios from "axios";

export const api = axios.create({
  baseURL: "https://contact-list-lhix.onrender.com",
  timeout: 20000,
});
