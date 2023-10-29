/* eslint-disable react/prop-types */
import { Container } from "./styles"

export function TextArea({ label, ...rest }) {
  return (
    <Container>
      <label>{label}</label>
      <div>
        <textarea {...rest} />
      </div>
    </Container>
  )
}