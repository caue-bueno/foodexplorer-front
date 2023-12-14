/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { SearchInput } from "../../../../components/SearchInput";
import { MenuButton } from "../MenuButton";
import { Container, Header, Button, Content, Wrapper } from "./styles";
import { GoSearch } from "react-icons/go";
import Close from "../../../../assets/icons/Close.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../hooks/auth";

export function MobileMenu({ menuIsOpen, onCloseMenu }) {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  function onNewDish() {
    navigate("newdish")
    onCloseMenu();
  }

  function onFavorites() {
    navigate("favorites")
    onCloseMenu();
  }

  function onExit() {
    navigate("/");
    signOut();
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
          <MenuButton title={"Novo prato"} onClick={onNewDish} />
          <MenuButton title={"Meus favoritos"} onClick={onFavorites}/>
          <MenuButton title={"Sair"} onClick={onExit} />
        </Wrapper>
      </Content>
    </Container>
  )
}