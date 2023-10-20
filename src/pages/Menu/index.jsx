import { Footer } from "../../components/Footer";
import { MenuHeader } from "../../components/MenuHeader";
import { SearchInput } from "../../components/SearchInput";
import { MenuButton } from "../../components/MenuButton";
import { Container, Content, Wrapper } from "./styles";
import { GoSearch } from "react-icons/go";

export function Menu() {
  return (
    <Container>
      <MenuHeader />
      <Content>
        <SearchInput placeholder={"Busque por pratos ou ingredientes"} icon={GoSearch} />
        <Wrapper>
          <MenuButton title={"Novo prato"} />
          <MenuButton title={"Meus favoritos"} />
          <MenuButton title={"Sair"} />
        </Wrapper>
      </Content>
      <Footer />
    </Container>
  )
}