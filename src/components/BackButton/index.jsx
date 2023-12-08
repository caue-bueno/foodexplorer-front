import { Container } from "./styles";
import CaretLeft from "../../assets/icons/CaretLeft.svg";
import { useNavigate } from "react-router-dom";


export function BackButton() {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(-1)}>
      <img src={CaretLeft} />
        voltar
    </Container>
  )
}