/* eslint-disable react/prop-types */
import { Container } from "./styles"

export function SearchInput({ icon: Icon, label, ...rest }) {
  return (
    <Container>
      <label>{label}</label>
      <div>
        <label>
          {Icon && <Icon size={20} className="icon" />}
          <input {...rest} />
        </label>
      </div>
    </Container>
  )
}