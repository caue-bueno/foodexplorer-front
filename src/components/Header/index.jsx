import { Container, Amount } from "./styles";
import Logo from "../../assets/logoHeader.svg";
import Menu from "../../assets/icons/menu.svg";
import Receipt from "../../assets/icons/receipt.svg";

export function Header() {
  return (
    <Container>
      <div>
        <img src={Menu} />
        <img src={Logo} />
        <div className="icon">
          <img src={Receipt} />
          <Amount>
            <p>0</p>
          </Amount>
        </div>

      </div>
    </Container>
  )
}