import { ReactNode, useContext, useEffect, useState } from "react";
import { ClientContext } from "../../providers";
import { StyledDashboard } from "./style";
import { Profile } from "../../components/Profile";
import { Header } from "../../components/Header";
import { Contacts } from "../../components/Contacts";
import { Modal } from "../../components/Modal";

export const Dashboard = () => {
  const { hasUser } = useContext(ClientContext);
  const [formModal, setFormModal] = useState<ReactNode | null>();
  useEffect(() => {
    setFormModal(null);
  }, []);
  return (
    <StyledDashboard>
      <Header text="Dashboard" hasUser={hasUser} />
      <Profile setFormModal={setFormModal} />
      <Contacts setFormModal={setFormModal} />
      <Modal form={formModal} setFormModal={setFormModal} />
    </StyledDashboard>
  );
};
