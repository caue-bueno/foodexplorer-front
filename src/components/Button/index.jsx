/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Button({ title, $primary = false, ...rest }) {
  return (
    
    <Container type="button" $primary={$primary} {...rest}>
      {title}
    </Container>
  )
}