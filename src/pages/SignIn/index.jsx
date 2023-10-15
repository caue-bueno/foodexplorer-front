import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Logo } from "../../components/logo"
import { Form } from "../../components/LoginForm"
import { Container } from "./styles"
// import { Link } from "react-router-dom"

export function SignIn() {
  return (
    <Container>
      <Logo />
      
      <Form title="Faça login">
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
        <Button title="Entrar" />

        <a> Criar uma conta </a>
      </Form>
      {/* <Link to="/">entar</Link> */}
    </Container>
  )
}

