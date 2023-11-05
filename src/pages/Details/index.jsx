/* eslint-disable no-unused-vars */
import { ButtonWrapper, BuyButton, Container, Description, DishPhoto, Item, MinusButton, PlusButton, Wrapper } from "./styles";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import Receipt from "../../assets/icons/receipt.svg";
import Minus from "../../assets/icons/Minus.svg";
import Plus from "../../assets/icons/Plus.svg";
import Image from "../../assets/Salad.png";



export function Details() {
  const isAdmin = true;

  return (
    <Container>
      <BackButton />
      <div>
        <DishPhoto $imagePath={Image} />
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
          {
            isAdmin ? <Button title={"Editar prato"} $primary /> :
              <ButtonWrapper>
                <div>
                  <MinusButton $imagePath={Minus} />
                  <h3>01</h3>
                  <PlusButton $imagePath={Plus} />
                  <BuyButton>
                    <img src={Receipt} />
                    <p>pedir ∙ R$ 25,00 </p>
                  </BuyButton>
                </div>
              </ButtonWrapper>
          }
        </Description>
      </div>
    </Container>
  )
}