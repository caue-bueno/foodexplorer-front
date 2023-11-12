/* eslint-disable no-unused-vars */
import Cake from "../../assets/icons/Cake.svg";
import FoodDish from "../../assets/icons/FoodDish.svg";
import MenuImage from "../../assets/icons/MenuDown.svg";
import WineGlass from "../../assets/icons/WineGlass.svg";
import { Container, MenuDown, MenuUp } from "./styles";


export function CategoryMenu() {

  let select = document.querySelector('.select'),
  selectedValue = document.getElementById('selected-value'),
  optionsViewButton = document.getElementById('options-view-button'),
  inputsOptions = document.querySelectorAll('.option input')

  

    function CloseMenu() {
      optionsViewButton.checked = false;
    }


  inputsOptions.forEach(input => {
    input.addEventListener('click', event => {
      // console.log("Input clicked");
      selectedValue.textContent = input.dataset.label

      const isMouseOrTouch =
        event.pointerType == "mouse" || event.pointerType == "touch"
      // console.log("isMouseOrTouch:", isMouseOrTouch);

      isMouseOrTouch && CloseMenu();
    })
  })




  return (
    <Container className="select">
      <div id="category-select">
        <label> Categoria </label>
        <input type="checkbox" id="options-view-button" />

        <div id="select-button">
          <div id="selected-value">Selecione a categoria</div>

          <div id="chevrons">
            <MenuDown $imagePath={MenuImage} data-image="chevron-down" />
            <MenuUp $imagePath={MenuImage} data-image="chevron-up" />
          </div>
        </div>
      </div>

      <ul id="options" className="closed">
        <li className="option">
          <input
            type="radio"
            name="category"
            value="meal"
            data-label="Refeição"
          />

          <img src={FoodDish} />
          <span className="label">Refeição</span>
        </li>
        <li className="option">
          <input
            type="radio"
            name="category"
            value="drink"
            data-label="Bebida"
          />

          <img src={WineGlass} />
          <span className="label">Bebida</span>
        </li>
        <li className="option">
          <input
            type="radio"
            name="category"
            value="dessert"
            data-label="Sobremesa"
          />

          <img src={Cake} />
          <span className="label">Sobremesa</span>
        </li>
      </ul>
    </Container>
  )
}