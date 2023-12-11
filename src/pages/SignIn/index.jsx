import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Logo } from "../../components/Logo"
import { Form } from "../../components/LoginForm"
import { Container } from "./styles"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../../hooks/auth"

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <div>
        <Logo />
        <Form title="Faça login">
          <Input
            label="Email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="email"
            onChange={(e) => setEmail(e.target.value)}

          />
          <Input
            label="Senha"
            placeholder="No mínimo 6 caracteres"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button title="Entrar" $primary onClick={handleSignIn} />

          <Link to="/signup">Criar uma conta</Link>
        </Form>
      </div>
    </Container>
  )
}

