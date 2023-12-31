import { AddButton, Container, DishPhoto, Icon, MinusButton, PlusButton, Wrapper } from "./styles";
import pencil from "../../../../assets/icons/Pencil.svg";
// import favorite from "../../assets/icons/Favorite.svg";
import heart from "../../../../assets/icons/Heart.svg";
import Image from "../../../../assets/Salad.png";
import Minus from "../../../../assets/icons/Minus.svg";
import Plus from "../../../../assets/icons/Plus.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../hooks/auth";


export function Dish() {
  let [quantity, setQuantity] = useState("01");
  const { user } = useAuth();
  const isAdmin = user.role === "admin";
  // const isFavorite = false;
  const navigate = useNavigate();


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
          isAdmin ? <Icon $imagePath={pencil} onClick={() => navigate("/editdish")}/> :
             <Icon $imagePath={heart} />
        }
      </div>
      <Wrapper>
        <DishPhoto $imagePath={Image} />
        <div onClick={() => navigate("/details")}>
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