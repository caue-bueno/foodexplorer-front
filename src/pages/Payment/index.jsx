import { ButtonText, Container, DishPhoto, Item, PaymentBox, Wrapper } from "./styles";
import Image from "../../assets/Salad.png";
import { Button } from "../../components/Button";

export function Payment() {
  return (
    <Container>
      <Wrapper>
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

        <div>
          <p>Total: R$ 103,88</p>
        </div>
        <div>
          <Button title="Avançar" $primary />
        </div>
      </Wrapper>
      <PaymentBox>
        <label>Pagamento</label>
        <div>
          <div></div>
          <div></div>
        </div>
      </PaymentBox>
    </Container>
  )
}