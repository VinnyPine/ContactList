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

  const handleModal = (form: ReactNode | null) => {
    setFormModal(form);
  };

  return (
    <StyledDashboard>
      <Header text="Dashboard" hasUser={hasUser} />
      <Profile handleModal={handleModal} />
      <Contacts handleModal={handleModal} />
      <Modal form={formModal} handleModal={handleModal} />
    </StyledDashboard>
  );
};
