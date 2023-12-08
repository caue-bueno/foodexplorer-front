/* eslint-disable no-unused-vars */
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MobileMenu } from "../../components/MobileMenu";
import { Container, Content } from "./styles";
import { useState } from "react";
import { AppRoutes } from "../../routes/app.routes";


export function Page() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Container>
      <Header onOpenMenu={() => setMenuIsOpen(true)} />
      <Content>
        <AppRoutes />
      </Content>
      <Footer />
      <MobileMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
    </Container>
  )
}