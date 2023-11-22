import { AddButton, Container, DishPhoto, Icon, MinusButton, PlusButton, Wrapper } from "./styles";
import pencil from "../../assets/icons/Pencil.svg";
import favorite from "../../assets/icons/Favorite.svg";
import Image from "../../assets/Salad.png";
import Minus from "../../assets/icons/Minus.svg";
import Plus from "../../assets/icons/Plus.svg";

export function Dish() {
  const isAdmin = false;


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
          <h4>Salada Ravanello</h4>
          <h3>&gt;</h3>
        </div>
          <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim</p>
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