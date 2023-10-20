/* eslint-disable react/prop-types */
import { Container } from "./styles"

export function Input({ icon: Icon, label, ...rest }) {
  return (
    <Container>
      <label>{label}</label>
      <div>
        {Icon && <Icon size={20} className="icon"/>}
        <input {...rest} />
      </div>
    </Container>
  )
}