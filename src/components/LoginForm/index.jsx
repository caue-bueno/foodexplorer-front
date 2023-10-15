/* eslint-disable react/prop-types */
import { Container, Title } from "./styles";

export function Form({ children, title }) {
  return (
    <Container>
      <Title>
        <p>
          {title}
        </p>
      </Title>
      {children}
    </Container>
  )
}