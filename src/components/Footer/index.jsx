import { Container } from "./styles";
import Logo from "../../assets/logoFooter.svg";

export function Footer() {
  return (
    <Container>
      <div>
        <img src={Logo} />
        <span>© 2023 - Todos os direitos reservados.</span>
      </div>

    </Container>
  )
}