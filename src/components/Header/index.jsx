/* eslint-disable react/prop-types */
import { Container, Cart, Amount, MenuButton, LogoWrapper, OrderButton, SignOutButton, Search, ButtonText } from "./styles";
import Logo from "../../assets/logos/logoHeader.svg";
import Menu from "../../assets/icons/menu.svg";
import Heart from "../../assets/icons/Heart.svg";
import Receipt from "../../assets/icons/receipt.svg";
import SignOut from "../../assets/icons/SignOut.svg";
import OrderHistory from "../../assets/icons/History.svg";
import ForkKnife from "../../assets/icons/ForkKnife.svg";
import { SearchInput } from "../SearchInput";
import { GoSearch } from "react-icons/go";


export function Header({ onOpenMenu }) {

  const isAdmin = true;

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
          />
        </Search>
        <ButtonText>
          <label>Meus favoritos</label>
          <img src={Heart} />
        </ButtonText>
        {
          isAdmin ?
            <ButtonText>
              <label>Novo prato</label>
              <img src={ForkKnife} />
            </ButtonText>
            :
            <ButtonText>
              <label>Histórico de pedidos</label>
              <img src={OrderHistory} />
            </ButtonText>
        }
        <Cart>
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