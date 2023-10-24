/* eslint-disable no-unused-vars */
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Form } from "../../components/LoginForm"
import { Logo } from "../../components/Logo"
import { Container } from "./styles"

export function SignUp() {
  return (
    <Container>
      <div>
        <Logo />
        <Form title="Crie sua conta">
          <Input
            label="Seu nome"
            placeholder="Exemplo: Maria da Silva"
            type="text"
          />
          <Input
            label="Email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="email"
          />
          <Input
            label="Senha"
            placeholder="No mínimo 6 caracteres"
            type="password"
          />
          <Button title="Criar conta" />

          <a> Já tenho uma conta </a>
        </Form>
      </div>
    </Container>
  )
}