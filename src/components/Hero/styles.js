import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
  display: flex;
  width: 38.4rem;
  width: 100%;
  height: 14.9rem;
  margin-bottom: 3.8rem;
  position: relative;

  @media (min-width: ${BREAKPOINTS.XLG}) {
    height: 27.2rem;
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
    height: 18rem;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const HeroImage = styled.div`
  width: 10rem;
  height: 100%;
  background-image: url(${({ $imagePath }) => $imagePath});
  background-size: cover;
  background-position: center;
  position: absolute;
  left: -5px;
  bottom: -5px;

  @media (min-width: ${BREAKPOINTS.XSM}) {
    width: 14.4rem;
    left: -15px;
  }

  @media (min-width: ${BREAKPOINTS.SM}) {
    width: 18.8rem;
  }

  @media (min-width: ${BREAKPOINTS.MD}) {
    width: 23.8rem;
  }

  @media (min-width: ${BREAKPOINTS.XLG}) {
    width: 50.1rem;
    left: -45px;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const HeroText = styled.div`
  width: calc(100% - 105px);
  height: 8.2rem;
  position: absolute;
  bottom: 15px;
  left: 105px;
  font-family: var(--font-poppins);
  
  span {
    font-size: 1.6rem;
    font-weight: 500;
  }
  
  p {
    font-family: var(--font-roboto);
    font-size: 1.2rem;
    margin-top: 3px;
  }

  @media (min-width: ${BREAKPOINTS.XSM}) {
    width: calc(100% - 140px);

    left: 140px;
    bottom: 5px;

  }

  @media (min-width: ${BREAKPOINTS.SM}) {
    width: calc(100% - 185px);
    bottom: 5px ;
    left: 185px;

    span {
    font-size: 1.8rem;
    font-weight: 500;
    }
  }

  @media (min-width: ${BREAKPOINTS.MD}) {
    width: calc(100% - 240px);
    left: 240px;
  }

  @media (min-width: ${BREAKPOINTS.XLG}) {
    width: calc(100% - 460px);
    left: 460px;
    bottom: 60px;

    span {
      font-size: 4rem;
      line-height: 140%;
    }

    p {
      font-size: 1.6rem;
    }
  }
`;

