import { Container } from "./styles";
import { Hero } from "../../components/Hero";
import { Section } from "../../components/Section";
import { Dish } from "../../components/Dish";


export function Home() {
  return (
    <Container>
      <Hero />
        <Section title={"Refeições"}>
          <Dish />
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