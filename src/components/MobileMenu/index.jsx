/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { SearchInput } from "../SearchInput";
import { MenuButton } from "../MenuButton";
import { Container, Header, Button, Content, Wrapper } from "./styles";
import { GoSearch } from "react-icons/go";
import Close from "../../assets/icons/Close.svg";
import { useNavigate } from "react-router-dom";

export function MobileMenu({ menuIsOpen, onCloseMenu }) {
  const navigate = useNavigate();

function click() {
  console.log("alo")
}

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <div>
          <Button onClick={onCloseMenu}>
            <img src={Close} />
          </Button>
          <p>Menu</p>
        </div>
      </Header>
      <Content>
        <SearchInput placeholder={"Busque por pratos ou ingredientes"} icon={GoSearch} />
        <Wrapper>
          <MenuButton title={"Novo prato"} />
          <MenuButton title={"Meus favoritos"} />
          <MenuButton title={"Sair"} />
        </Wrapper>
      </Content>
    </Container>
  )
}