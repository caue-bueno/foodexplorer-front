import { ButtonNext, ButtonPrev, Container, Overlay, ShadowLeft, ShadowRight } from "./styles";
import { Hero } from "../../components/Hero";
import { Section } from "../../components/Section";
import { Dish } from "../../components/Dish";
import CaretLeft from "../../assets/icons/CaretLeft.svg";
import CaretRight from "../../assets/icons/CaretRight.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

export function Home() {

  // useEffect(() => {
  //   // Swiper.init()

  //   new Swiper("#swiper", {
  //     slidesPerView: "auto",
  //     effect: "fade",
  //     loop: true,
  //     lazyLoading: true,
  //     centeredSlides: true,
  //     spaceBetween: 27,
  //     keyboard: {
  //       enable: true,
  //     },
  //     navigation: {
  //       nextEl: "#nav-next",
  //       prevEl: "#nav-prev",
  //     },
  //     breakpoints: {
  //       320: {
  //         spaceBetween: 7
  //       },
  //       375: {
  //         spaceBetween: 17
  //       },
  //       425: {
  //         spaceBetween: 27
  //       }
  //     }
  //     // coverflowEffect: {
  //     //   rotate: 30,
  //     //   stretch: 0,
  //     //   depth: 100,
  //     //   modifier: 2,
  //     //   slideShadows: true
  //     // },
  //     // modules: {
  //     //   coverflow: "EffectCoverflow",
  //     // }
  //   })

  // }, [])

  return (
    <Container>
      {/* <Header /> */}
      <Hero />
      {/* <Section title={"Refeições"}>
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
            <ButtonPrev $imagePath={CaretLeft} id="nav-prev"/>
            <ButtonNext $imagePath={CaretRight} id="nav-next" />
        </div>
      </Section> */}
      <Section title={"Sobremesas"}>
        <Swiper
          // effect={'coverflow'}
          loop={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={{
            prevEl: "#nav-prev",
            nextEl: "#nav-next",
          }}
          modules={[EffectCoverflow, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Dish />
          </SwiperSlide>
          <SwiperSlide>
            <Dish />
          </SwiperSlide>
          <SwiperSlide>
            <Dish />
          </SwiperSlide>
          <SwiperSlide>
            <Dish />
          </SwiperSlide>
          <SwiperSlide>
            <Dish />
          </SwiperSlide>
          <SwiperSlide>
            <Dish />
          </SwiperSlide>
          <SwiperSlide>
            <Dish />
          </SwiperSlide>
          <SwiperSlide>
            <Dish />
          </SwiperSlide>
          <Overlay>
            <ShadowLeft />
            <ShadowRight />
          </Overlay>
          <ButtonPrev $imagePath={CaretLeft} id="nav-prev" />
          <ButtonNext $imagePath={CaretRight} id="nav-next" />
        </Swiper>
      </Section>
      <Section title={"Bebidas"}>
        <Dish />
      </Section>
      {/* <Footer /> */}
    </Container>
  )
}