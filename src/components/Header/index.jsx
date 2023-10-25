/* eslint-disable react/prop-types */
import { Container, Cart, Amount, MenuButton, LogoWrapper, OrderButton, SignOutButton, Search } from "./styles";
import Logo from "../../assets/logoHeader.svg";
import Menu from "../../assets/icons/menu.svg";
import Receipt from "../../assets/icons/receipt.svg";
import SignOut from "../../assets/icons/SignOut.svg";
import { SearchInput } from "../SearchInput";
import { GoSearch } from "react-icons/go";


export function Header({ onOpenMenu }) {

  const isAdmin = false;

  return (
    <Container data-is-admin={isAdmin}>
      <div>
        <MenuButton onClick={onOpenMenu}>
          <img src={Menu} />
        </MenuButton>
        <LogoWrapper data-is-admin={isAdmin}>
          <img src={Logo} />
          {isAdmin ? <span>admin</span> : <></>}
        </LogoWrapper>
        <Search>
          <SearchInput
            placeholder={"Busque por pratos ou ingredientes"}
            icon={GoSearch}
            className="centered-input"
          />
        </Search>
        <Cart data-is-admin={isAdmin}>
          <img src={Receipt} />
          <Amount>
            <p>0</p>
          </Amount>
        </Cart>
        <OrderButton>
          <div>
            <img src={Receipt} />
          </div>
          <p>Pedidos (0)</p>
        </OrderButton>
        <SignOutButton>
          <img src={SignOut} />
        </SignOutButton>
      </div>
    </Container>
  )
}