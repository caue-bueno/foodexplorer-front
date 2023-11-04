import { Container } from "./styles";
import CaretLeft from "../../assets/icons/CaretLeft.svg";


export function BackButton() {
  return (
    <Container>
      <img src={CaretLeft} />
        voltar
    </Container>
  )
}