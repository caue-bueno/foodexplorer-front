import { Container, Form, PaymentButton } from "./styles";
import Pix from "../../assets/icons/Pix.svg";
import CreditCard from "../../assets/icons/CreditCard.svg";
import QrCode from "../../assets/icons/QrCode.svg";
import { useEffect } from "react";
import { Button } from "../Button"

export function PaymentMethod() {
  useEffect(() => {
    let pixBtn = document.getElementById('pix'),
      creditCardBtn = document.getElementById('credit-card'),
      qrCode = document.getElementById('qrcode'),
      form = document.getElementById('form');

    const handlePixClick = () => {
      pixBtn.classList.add('pressed');
      creditCardBtn.classList.remove('pressed');
      form.classList.add('hidden');
      qrCode.classList.remove('hidden');
    };

    const handleCreditCardClick = () => {
      creditCardBtn.classList.add('pressed');
      pixBtn.classList.remove('pressed');
      form.classList.remove('hidden');
      qrCode.classList.add('hidden');
    };

    pixBtn.addEventListener('click', handlePixClick)
    creditCardBtn.addEventListener('click', handleCreditCardClick)

    return () => {
      pixBtn.removeEventListener('click', handlePixClick);
      creditCardBtn.removeEventListener('click', handleCreditCardClick)
    }

  }, []);

  return (
    <Container>
      <div>
        <PaymentButton $border={"left"} className="pressed" id="pix">
          <img src={Pix} alt="" />
          <p>PIX</p>
        </PaymentButton>
        <PaymentButton $border={"right"} id="credit-card">
          <img src={CreditCard} alt="" />
          <p>Crédito</p>
        </PaymentButton>
      </div>
      <div>
        {/* <div id="qrcode">
          <img src={QrCode} alt="qrcode" />
        </div>
        <Form id="form" className="hidden">
          <label>Número do Cartão</label>
          <input placeholder="0000 0000 0000 0000" />
          <div>
            <div>
              <label>Validade</label>
              <input type="text" />
            </div>
            <div>
              <label>CVC</label>
              <input type="text" />
            </div>
          </div>
            <Button title={"Finalizar pagamento"} $primary />
        </Form> */}
      </div>
    </Container>
  )
}