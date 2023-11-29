import { Container } from "./styles";
import LogoImage from "../../assets/logos/logo.svg"


export function Logo() {
  return (
    <Container>
      <img src={LogoImage} />
      <h1>food explorer</h1>
    </Container>
  )
}