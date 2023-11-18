import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
  display: flex;
  width: 38.4rem;
  width: 100%;
  height: 14.9rem;
  border: 1px solid white;
  position: relative;

  @media (min-width: ${BREAKPOINTS.XLG}) {
    height: 20.2rem;
  }

`;

export const Box = styled.div`
  width: 37.6rem;
  width: 100%;
  height: 12rem;
  background-image: url(${({ $imagePath }) => $imagePath});
  margin-left: auto;
  margin-top: auto;
  border-radius: .3rem;

  @media (min-width: ${BREAKPOINTS.XLG}) {
    height: 14rem;
    background-repeat: no-repeat;
    background-size: cover;

  }
`;

export const HeroImage = styled.div`
  width: 10rem;
  height: 100%;
  background-image: url(${({ $imagePath }) => $imagePath});
  background-size: cover;
  /* background-repeat: no-repeat; */
  background-position: center;
  position: absolute;
  left: -5px;

  @media (min-width: ${BREAKPOINTS.XSM}) {
    width: 15.1rem;
    left: -15px;
  }

  @media (min-width: ${BREAKPOINTS.SM}) {
    width: 19.1rem;
    left: -25px;
  }

  @media (min-width: ${BREAKPOINTS.XLG}) {
    width: 40.1rem;
    left: -25px;
    border: 1px solid red;
  }
`;

export const HeroText = styled.div`
  /* width: 17rem; */
  width: calc(100% - 105px);
  height: 8.2rem;
  position: absolute;
  /* border: 1px red solid; */
  bottom: 15px;
  left: 105px;
  font-family: 'Poppins', sans-serif;
  
  span {
    font-size: 1.6rem;
    font-weight: 500;
  }
  
  p {
    font-size: 1.2rem;
    margin-top: 3px;
  }

  @media (min-width: ${BREAKPOINTS.XSM}) {
    width: calc(100% - 140px);

    left: 140px;
    bottom: 5px;

  }

  @media (min-width: ${BREAKPOINTS.SM}) {
    width: calc(100% - 165px);
    /* height: 6.2rem; */
    bottom: 5px ;
    left: 165px;

    span {
    font-size: 1.8rem;
    font-weight: 500;
    }
  }

  @media (min-width: ${BREAKPOINTS.XLG}) {
    left: 400px;

  }

`;