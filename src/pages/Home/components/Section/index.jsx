/* eslint-disable react/prop-types */
import { Container, SwiperContainer } from "./styles";

export function Section({ title, children }) {
  return (
    <Container>
      <label>{title}</label>
      <SwiperContainer>{children}</SwiperContainer>
    </Container>
  )
}