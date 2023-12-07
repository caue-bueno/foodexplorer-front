/* eslint-disable no-unused-vars */
import { useState } from "react"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Form } from "../../components/LoginForm"
import { Logo } from "../../components/Logo"
import { Container } from "./styles"
import { Link } from "react-router-dom"

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }
  }

  return (
    <Container>
      <div>
        <Logo />
        <Form title="Crie sua conta">
          <Input
            label="Seu nome"
            placeholder="Exemplo: Maria da Silva"
            type="text"
            onChange={ e => setName(e.target.value)}
          />
          <Input
            label="Email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="email"
            onChange={ e => setEmail(e.target.value)}
          />
          <Input
            label="Senha"
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={ e => setPassword(e.target.value)}
          />
          <Button title="Criar conta" $primary onClick={handleSignUp} />

          <Link to="/" > Já tenho uma conta </Link>
        </Form>
      </div>
    </Container>
  )
}