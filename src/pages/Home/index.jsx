import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Container, Content } from "./styles";
import { useState } from "react";



export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(true);

  return (
    <Container>
      <Header />
      <Content>
      </Content>
      <Footer />
      <Menu 
        menuIsOpen={menuIsOpen}
      />
    </Container>
  )
}