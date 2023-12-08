/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function MenuButton({ title, onClick }) {
  return (
    <Container onClick={onClick}>
      {title}
    </Container>  
    )
}