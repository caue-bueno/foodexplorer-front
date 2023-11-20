import { AddButton, Container, DishPhoto, Icon, MinusButton, PlusButton, Wrapper } from "./styles";
import pencil from "../../assets/icons/Pencil.svg";
import favorite from "../../assets/icons/Favorite.svg";
import Image from "../../assets/Salad.png";
import Minus from "../../assets/icons/Minus.svg";
import Plus from "../../assets/icons/Plus.svg";

export function Dish() {
  const isAdmin = true;


  return (
    <Container>
      <div>
        {
          isAdmin ? <Icon $imagePath={pencil} />
            : <Icon $imagePath={favorite} />
        }
      </div>
      <Wrapper>
        <DishPhoto $imagePath={Image} />
        <div>
          <p>Salada Ravanello</p>
          <h3>&gt;</h3>
        </div>
        <span> R$ 49,97 </span>
        {
          isAdmin ?
            <></>
            :
            <div>
              <div>
                <MinusButton $imagePath={Minus} />
                <p>01</p>
                <PlusButton $imagePath={Plus} />
              </div>
              <AddButton>incluir</AddButton>
            </div>
        }
      </Wrapper>
    </Container>
  )
}