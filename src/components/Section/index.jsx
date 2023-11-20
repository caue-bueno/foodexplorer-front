/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Section({ title, children }) {
  return (
    <Container>
      <label>{title}</label>
      <div>{children}</div>
    </Container>
  )
}