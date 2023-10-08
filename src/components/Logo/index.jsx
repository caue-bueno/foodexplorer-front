import { Container } from "./styles";
import LogoImage from "../../assets/logo.svg"


export function Logo() {
  return (
    <Container>
      <img src={LogoImage} />
      <h1>food explorer</h1>
    </Container>
  )
}