import { useContext, useEffect } from "react";
import { ContactContext } from "../../providers";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledDashboard } from "./style";
import { useNavigate } from "react-router-dom";
import { Profile } from "../../components/Profile";
import { getDate } from "../../utils";
import { Header } from "../../components/Header";
import { Contacts } from "../../components/Contacts";

export const Dashboard = () => {
  return (
    <StyledDashboard>
      <Header />
      <Profile />
      <Contacts />
    </StyledDashboard>
  );
};
