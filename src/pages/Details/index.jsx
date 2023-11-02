import { BackButton, Container, Description, DishPhoto, Item, Wrapper } from "./styles";
import CaretLeft from "../../assets/icons/CaretLeft.svg";
import { Button } from "../../components/Button";


export function Details() {
  return (
    <Container>
      <BackButton>
        <img src={CaretLeft} />
        voltar
      </BackButton>
      <DishPhoto />
      <Description>
        <h2>Salada Ravanello</h2>
        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
        <Wrapper>
          <Item>
            alface
          </Item>
          <Item>
            cebola
          </Item>
          <Item>
            pão naan
          </Item>
          <Item>
            pepino
          </Item>
          <Item>
            rabanete
          </Item>
          <Item>
            tomate
          </Item>
        </Wrapper>
        <Button title={"Editar prato"} $primary />
      </Description>
    </Container>
  )
}