import styled from "styled-components"
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
  padding-left: 8px;

  @media (min-width: ${BREAKPOINTS.LG}){
    padding: 0 6.4rem;
  }

  @media (min-width: ${BREAKPOINTS.XLG}) {
    padding: 2rem 10.4rem 0 ;
  }

  .mySwiper{
    position: relative;
    border-radius: 0.5rem;

  }

  .swiper-slide {
    /* border: 1px solid green; */
    width: auto;
    /* display: flex; */
    /* justify-content: center; */
  }

  .swiper-wrapper {
    
  }
  
  .swiper-custom-nav {
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: transparent;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
  }
`;

export const ButtonPrev = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 6;
  width: 2.4rem;
  height: 2.4rem;
  background-image: url(${({ $imagePath }) => $imagePath});
  background-position: center;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  display: none;

  @media (min-width: ${BREAKPOINTS.MD}) {
    display: block;
  }
`;

export const ButtonNext = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: 6;
  width: 2.4rem;
  height: 2.4rem;
  background-image: url(${({ $imagePath }) => $imagePath});
  background-position: center;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  display: none;

  @media (min-width: ${BREAKPOINTS.MD}) {
    display: block;
  }
`;

export const Overlay = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const ShadowLeft = styled.div`
  display: none;
  width: 20rem;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 7, 10, 0.6), transparent);
  z-index: 2;
  pointer-events: none;

  @media (min-width: ${BREAKPOINTS.MD}) {
    display: block;
  }
`;

export const ShadowRight = styled.div`
  display: none;
  width: 20rem;
  height: 100%;
  background: linear-gradient(to left, rgba(0, 7, 10, 0.6), transparent);
  z-index: 2;
  pointer-events: none;

  @media (min-width: ${BREAKPOINTS.MD}) {
    display: block;
  }
`;