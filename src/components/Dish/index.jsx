import { AddButton, Container, DishPhoto, Icon, MinusButton, PlusButton, Wrapper } from "./styles";
import pencil from "../../assets/icons/Pencil.svg";
// import favorite from "../../assets/icons/Favorite.svg";
import heart from "../../assets/icons/Heart.svg";
import Image from "../../assets/Salad.png";
import Minus from "../../assets/icons/Minus.svg";
import Plus from "../../assets/icons/Plus.svg";
import { useState } from "react";

// quantity = String(quantity).padStart(2, "0")
export function Dish() {
  let [quantity, setQuantity] = useState("01");
  const isAdmin = false;
  // const isFavorite = false;

  function Add() {
    if (quantity >= 1) {
      const numericQuantity = parseInt(quantity, 10);
      setQuantity((numericQuantity + 1).toString().padStart(2, "0"));
    }
  }

  function Remove() {
    if (quantity > 1) {
      const numericQuantity = parseInt(quantity, 10);
      setQuantity((numericQuantity - 1).toString().padStart(2, "0"));
    }
  }

  return (
    <Container>
      <div>
        {
          isAdmin ? <Icon $imagePath={pencil} /> :
             <Icon $imagePath={heart} />
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
                <MinusButton $imagePath={Minus} onClick={Remove} />
                <p>{quantity}</p>
                <PlusButton $imagePath={Plus} onClick={Add} />
              </div>
              <AddButton>incluir</AddButton>
            </div>
        }
      </Wrapper>
    </Container>
  )
}