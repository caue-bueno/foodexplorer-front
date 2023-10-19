import { Container } from "./styles";
import Close from "../../assets/icons/Close.svg";

export function MenuHeader() {
  return (
    <Container>
      <div>
        <img src={Close} />
      </div>
      <p>Menu</p>
    </Container>
  )
}