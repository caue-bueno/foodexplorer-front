/* eslint-disable react/prop-types */
import { Container, Title } from "./styles";

export function Form({ children, title }) {
  return (
    <Container>
      <Title>
        {title}
      </Title>
      {children}
    </Container>
  )
}