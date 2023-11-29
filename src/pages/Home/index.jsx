import { Container } from "./styles";
import { Hero } from "../../components/Hero";
import { Section } from "../../components/Section";
import { Dish } from "../../components/Dish";


export function Home() {
  return (
    <Container>
      <Hero />
        <Section title={"Refeições"}>
          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <Dish />  
              </div>
            </div>
          </div>
        </Section>
        <Section title={"Sobremesas"}>
          <Dish />
        </Section>
        <Section title={"Bebidas"}>
          <Dish />
        </Section>
    </Container>
  )
}