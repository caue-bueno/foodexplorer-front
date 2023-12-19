/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState } from "react"
import { Container } from "./styles"

export function Input({ icon: Icon, label, errorMessage, ...rest }) {
  const [focused, setFocused] = useState(false);
  return (
    <Container>
      <label>{label}</label>
      <div>
        {Icon && <Icon size={20} className="icon" />}
        <input {...rest} onBlur={() => setFocused(true)} focused={focused.toString()} />
        <span>{errorMessage}</span>
      </div>
    </Container>
  )
}