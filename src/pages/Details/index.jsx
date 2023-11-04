import { Container, Description, DishPhoto, Item, Wrapper } from "./styles";
import { Button } from "../../components/Button";
import Image from "../../assets/Salad.png";
import { BackButton } from "../../components/BackButton";


export function Details() {
  return (
    <Container>
      <BackButton />
      <DishPhoto $imagePath={Image}/>
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