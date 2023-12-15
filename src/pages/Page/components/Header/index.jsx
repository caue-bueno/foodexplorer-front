/* eslint-disable react/prop-types */
import { Container, Cart, Amount, MenuButton, LogoWrapper, OrderButton, SignOutButton, Search, ButtonText } from "./styles";
import Logo from "../../../../assets/logos/logoHeader.svg";
import Menu from "../../../../assets/icons/menu.svg";
import Heart from "../../../../assets/icons/Heart.svg";
import Receipt from "../../../../assets/icons/receipt.svg";
import SignOut from "../../../../assets/icons/SignOut.svg";
import OrderHistory from "../../../../assets/icons/History.svg";
import ForkKnife from "../../../../assets/icons/ForkKnife.svg";
import { SearchInput } from "../../../../components/SearchInput";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../hooks/auth";


export function Header({ onOpenMenu }) {
  const { signOut, user } = useAuth();
  const isAdmin = user.role === "admin";
  const navigate = useNavigate();

  return (
    <Container data-is-admin={isAdmin}>
      <div>
        <MenuButton onClick={onOpenMenu}>
          <img src={Menu} />
        </MenuButton>
        <LogoWrapper data-is-admin={isAdmin} onClick={() => navigate("/")}>
          <img src={Logo} />
          {isAdmin ? <span>admin</span> : <></>}
        </LogoWrapper>
        <Search>
          <SearchInput
            placeholder={"Busque por pratos ou ingredientes"}
            icon={GoSearch}
          />
        </Search>
        <ButtonText onClick={() => navigate("/favorites")}>
          <label>Meus favoritos</label>
          <img src={Heart} />
        </ButtonText>
        {
          isAdmin ?
            <ButtonText onClick={() => navigate("/newdish")}>
              <label>Novo prato</label>
              <img src={ForkKnife} />
            </ButtonText>
            :
            <ButtonText onClick={() => navigate("/history")}>
              <label>Histórico de pedidos</label>
              <img src={OrderHistory} />
            </ButtonText>
        }
        <Cart onClick={isAdmin ? () => navigate("/history") : () => navigate("/order")}  >
          <img src={Receipt} />
          <Amount>
            <p>0</p>
          </Amount>
        </Cart>
        <OrderButton onClick={isAdmin ? () => navigate("/history") : () => navigate("/order")}>
          <div>
            <img src={Receipt} />
          </div>
          <p>Pedidos (0)</p>
        </OrderButton>
        <SignOutButton onClick={signOut}>
          <img src={SignOut} />
        </SignOutButton>
      </div>
    </Container>
  )
}