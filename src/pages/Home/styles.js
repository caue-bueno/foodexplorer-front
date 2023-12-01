import styled from "styled-components"
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
  padding-left: 8px;

  @media (min-width: ${BREAKPOINTS.LG}){
    padding: 0 12.4rem;
  }

  @media (min-width: ${BREAKPOINTS.XLG}) {
    padding: 2rem 12.4rem 0 ;
  }

  #swiper {
    /* width: 46rem; */
    /* display: flex;
    justify-content: center; */
    position: relative;
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
`;