import { Container, Image } from "./styles";
import Clock from "../../assets/icons/Clock.svg";
import CheckCircle from "../../assets/icons/CheckCircle.svg";
import Fork from "../../assets/icons/Fork.svg";


export function PaymentStatus() {

  let status = 1;

  return (
    <Container>
      {status === 1 && 
      <div>
        <Image $imagePath={Clock}/>
        <p>Aguardando pagamento no caixa</p>
      </div>
      }
      {status === 2 && 
      <div>
        <Image $imagePath={CheckCircle}/>
        <p>Pagamento aprovado!</p>
      </div>
      }
      {status !== 1 && status !== 2 && 
      <div>
        <Image $imagePath={Fork}/>
        <p>Pedido entregue!</p>
      </div>
      }
      
    </Container>
  )
}