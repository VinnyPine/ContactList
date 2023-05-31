import { useContext } from "react";
import { ClientContext } from "../../providers";
import { StyledDashboard } from "./style";
import { Profile } from "../../components/Profile";
import { Header } from "../../components/Header";
import { Contacts } from "../../components/Contacts";

export const Dashboard = () => {
  const { user } = useContext(ClientContext);

  return (
    <StyledDashboard>
      <Header text="Dashboard" user={user} />
      <Profile />
      <Contacts />
    </StyledDashboard>
  );
};
