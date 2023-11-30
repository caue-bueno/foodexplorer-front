import { Container } from "./styles";
import { Hero } from "../../components/Hero";
import { Section } from "../../components/Section";
import { Dish } from "../../components/Dish";
import Swiper from "swiper";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { useEffect } from "react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';

export function Home() {

  useEffect(()=> {
    // Swiper.init()

new Swiper("#swiper", {
    slidesPerView: "auto",
    effect: "coverflow",
    loop: true,
    lazyLoading: true,
    centeredSlides: true,
    spaceBetween: 27,
    keyboard: {
      enable: true,
    },
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true
    },
    modules:{
      coverflow: "EffectCoverflow",
    }
  })

}, [])

  return (
    <Container>
      <Hero />
      <Section title={"Refeições"}>
          <div id="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <Dish />
              </div>
              <div className="swiper-slide">
                <Dish />
              </div>
              <div className="swiper-slide">
                <Dish />
              </div>
              <div className="swiper-slide">
                <Dish />
              </div>
              <div className="swiper-slide">
                <Dish />
              </div>
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