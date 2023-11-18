/* eslint-disable no-unused-vars */
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Details } from "../Details";
import { EditDish } from "../EditDish";
import { Home } from "../Home";
import { NewDish } from "../NewDish";
import { Container, Content } from "./styles";
import { useState } from "react";



export function Page() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Container>
      <Header onOpenMenu={() => setMenuIsOpen(true)} />
      <Content>
        <Home/>
      </Content>
      <Footer />
      <Menu 
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
    </Container>
  )
}