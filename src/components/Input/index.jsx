/* eslint-disable react/prop-types */
import { Container } from "./styles"

export function Input({ icon: Icon, label, ...rest }) {
  return (
    <div>
      <label>{label}</label>
      <Container>
        {Icon && <Icon size={20} />}
        <input {...rest} />
      </Container>
    </div>
  )
}