import { ButtonText, Container, DishPhoto, Item } from "./styles";
import Image from "../../assets/Salad.png";


export function Payment() {
  return (
    <Container>
      <label>Meu pedido</label>

      <Item>
        <DishPhoto $imagePath={Image} />
        <div>
          <div>
            <p>1 x  Salada Radish</p>
            <span>R$ 25,97</span>
          </div>
          <ButtonText>
            Excluir
          </ButtonText>
        </div>
      </Item>

    </Container>
  )
}