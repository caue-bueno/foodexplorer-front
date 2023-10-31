/* eslint-disable react/prop-types */
import { Container } from "./styles"

export function IngredientsField({ children }) {
  return (
    <Container>
      <label>Ingredientes</label>
      <div>
        {children}
      </div>
    </Container>
  )
}