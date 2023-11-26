import { ButtonText, DishPhoto, Item } from "../Order/styles";
import { Container } from "./styles";
import Image from "../../assets/Salad.png";


export function Favorites() {
  return (
    <Container>
      <label>Meus favoritos</label>
        <Item>
          <DishPhoto $imagePath={Image} />
          <div>
            <div>
              <p>Salada Radish</p>
            </div>
            <ButtonText>
            Remover dos Favoritos
            </ButtonText>
          </div>
        </Item>
        <Item>
          <DishPhoto $imagePath={Image} />
          <div>
            <div>
              <p>Salada Radish</p>
            </div>
            <ButtonText>
            Remover dos Favoritos
            </ButtonText>
          </div>
        </Item>
        <Item>
          <DishPhoto $imagePath={Image} />
          <div>
            <div>
              <p>Salada Radish</p>
            </div>
            <ButtonText>
            Remover dos Favoritos
            </ButtonText>
          </div>
        </Item>
        <Item>
          <DishPhoto $imagePath={Image} />
          <div>
            <div>
              <p>Salada Radish</p>
            </div>
            <ButtonText>
            Remover dos Favoritos
            </ButtonText>
          </div>
        </Item>
    </Container>
  )
}