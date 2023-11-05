import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  border: 1px solid yellowgreen;
  
  @media (min-width: ${BREAKPOINTS.XSM}){
    margin: 1rem 1rem 0;
  }

  @media (min-width: ${BREAKPOINTS.SM}){
    margin: 1rem 2.4rem 0;
  }

  @media (min-width: ${BREAKPOINTS.MD}){
      /* margin: 4.2rem 12.1rem; */
    > div {
      display: flex;
      margin-top: 6.2rem;
      align-items: center;
      border: 1px solid white;
      /* gap: 4.7rem; */
    }
  }
`;

export const BackButton = styled.button`
  display: flex;
  width: 7rem;
  align-items: center;
  background: none;
  border: none;

  font-family: 'Poppins', sans-serif;
  font-size: 2.4rem;
  font-weight: medium;

  img {
    margin-right: 5px;
    width: 12px;
  }
`;

export const DishPhoto = styled.div`
  width: 26.3rem;
  height: 26.3rem;
  margin: 0 auto 1.6rem;
  background-image: url(${({ $imagePath }) => $imagePath});
  background-repeat: no-repeat;
  border: 1px solid red;

  @media (min-width: ${BREAKPOINTS.MD}){
  margin: 0 0;
  width: 39rem;
  height: 39rem;
    
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  /* height: 31.6rem; */
 
  margin: 0 auto 1.6rem;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  border: 1px solid yellow;

  h2 {
    font-size: 2.7rem;
    font-weight: 100;
    line-height: 140%;
  }

  p {
    font-size: 1.4rem;
  }

  @media (min-width: ${BREAKPOINTS.SM}){
    width: 31.6rem;

    p {
    font-size: 1.6rem;
    }
  }

  @media (min-width: ${BREAKPOINTS.MD}){
    /* min-width: 35rem; */
    width: 100%;
    margin: 0 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem;
  justify-content: center;
  margin-bottom: 2.4rem;
  border: 1px solid red;

  @media (min-width: ${BREAKPOINTS.SM}){
    gap: 2.4rem;
  }
`;

export const Item = styled.div`
  padding: .4rem .8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: .5rem;
  font-size: 1.4rem;
  line-height: 2.4rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 28.5rem;
  margin: 0 auto;
  /* border: 1px solid green; */
  > div {
    display: flex;
    gap: 1.5rem;
    align-items: center;

    h3 {
      font-size: 2.2rem;
    }
  }

  @media (min-width: ${BREAKPOINTS.SM}){
    width: 31rem;
    margin: 0 0;
  }
`;

export const MinusButton = styled.button`
  width: 2.7rem;
  height: 2.7rem;
  background-image: url(${({ $imagePath }) => $imagePath});
  background-color: transparent;
  border: none;
`;

export const PlusButton = styled.button`
  width: 2.7rem;
  height: 2.7rem;
  background-image: url(${({ $imagePath }) => $imagePath});
  background-color: transparent;
  border: none;
`;

export const BuyButton = styled.button`
  display: flex;
  width: 16rem;
  height: 3.8rem;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  border: none;
  border-radius: .5rem;

  img {
    width: 2rem;
  }

  p {
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    line-height: 1.6rem;
  }

  @media (min-width: ${BREAKPOINTS.SM}){
    width: 18.8rem;
  }
`;