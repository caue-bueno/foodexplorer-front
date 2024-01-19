/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import Cake from "../../assets/icons/Cake.svg";
import FoodDish from "../../assets/icons/FoodDish.svg";
import MenuImage from "../../assets/icons/MenuDown.svg";
import WineGlass from "../../assets/icons/WineGlass.svg";
import { Container, MenuDown, MenuUp } from "./styles";


export function CategoryMenu() {
  // useEffect(() => {
  //   let selectedValue = document.getElementById('selected-value'),
  //   optionsViewButton = document.getElementById('options-view-button'),
  //   inputsOptions = document.querySelectorAll('.option input'),
  //   options = document.getElementById('options'),
  //   selectButton = document.getElementById('select-button')
    
    
  //   function toggleMenu() {
  //     console.log('isChecked');
  //   //   let isChecked = optionsViewButton.checked
  //   //   if (isChecked) {
  //   //   options.classList.remove('closed')
  //   // } else {
  //   //   options.classList.add('closed')
  //   // }
  //   options.classList.toggle('closed')

  // }
  
  // function selectOption() {
  //   selectButton.classList.remove('not-selected');
  //   selectButton.classList.add('selected');
  //   optionsViewButton.checked = false;
  //   toggleMenu()
  // }

  // inputsOptions.forEach(input => {
  //   input.addEventListener('click', event => {
  //     console.log(optionsViewButton.checked);
  //     // optionsViewButton.checked = false;
  //     if (event.target.classList.contains('option')) {
  //       return;
  //     }

  //     if (optionsViewButton.checked) {
  //       selectOption(input);
  //     }
  //     selectedValue.textContent = input.dataset.label
  //     console.log("evento", event.pointerType)
      
  //     let isMouseOrTouch = event.key == "click" || event.key == "touchstart"
  //     isMouseOrTouch && 
  //     // selectOption()
  //     console.log("evento", event.type)
  //   })
    
  //   optionsViewButton.addEventListener('click', () => toggleMenu());
  // })
  
  // window.addEventListener('keydown', e => {
  //   if (options.classList.contains('closed')) return
    
  //   if (e.key == "Escape" || e.key == " ") {
  //     options.classList.add('closed')
  //     optionsViewButton.checked = false;
  //   }
  // })

  // function focus() {
  //   const input = document.querySelector('.option input:checked') || document.querySelector('.option input')
  //   input.focus()
  //   console.log('entrou')
  // }

  // return () => {
  //   optionsViewButton.removeEventListener('click', () => toggleMenu());
  // }

  // }, []);

  useEffect(() => {
    const selectedValue = document.getElementById('selected-value');
    const optionsViewButton = document.getElementById('options-view-button');
    const inputsOptions = document.querySelectorAll('.option input');
    const options = document.getElementById('options');
    const selectButton = document.getElementById('select-button');

    function toggleMenu() {
      options.classList.toggle('closed');
    }

    function selectOption(input) {
      selectButton.classList.remove('not-selected');
      selectButton.classList.add('selected');
      optionsViewButton.checked = false;
      toggleMenu();
      selectedValue.textContent = input.dataset.label;
    }

    function handleInputClick(event) {
      if (event.target.classList.contains('option')) {
        return;
      }

      if (optionsViewButton.checked) {
        selectOption(event.target);
      }
    }

    function handleOptionsButtonClick() {
      toggleMenu();
    }

    function handleKeyDown(e) {
      if (options.classList.contains('closed')) return;

      if (e.key === "Escape" || e.key === " ") {
        options.classList.add('closed');
        optionsViewButton.checked = false;
      }
    }

    inputsOptions.forEach(input => {
      input.addEventListener('click', handleInputClick);
    });

    optionsViewButton.addEventListener('click', handleOptionsButtonClick);

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      optionsViewButton.removeEventListener('click', handleOptionsButtonClick);
    };
  }, []);



  // optionsViewButton.addEventListener('input', () => {
  //   const input = 
  //   document.querySelector('.option input:checked') || document.querySelector('.option input')
  //   input.focus()
  // })

  // options.forEach(option => {
  //   const input = option.querySelector('input')

  //   input.addEventListener('focus', () => {
  //     option.classList.add('focused');
  //   });
  // })


  return (
    <Container className="select">
      <label> Categoria </label>
      <div id="category-select">
        <input type="checkbox" id="options-view-button" onClick={focus}/>

        <div id="select-button" className="not-selected">
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