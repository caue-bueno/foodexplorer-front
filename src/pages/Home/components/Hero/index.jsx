import { Box, Container, HeroImage, HeroText } from "./styles";
import heroImage from "../../../../assets/heroImage.png";

export function Hero() {
  return (
    <Container>
      <HeroImage $imagePath={heroImage}/>
      <Box />
      <HeroText>
        <span>Sabores inigualáveis</span>
        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
      </HeroText>
      
    </Container>
  )
}