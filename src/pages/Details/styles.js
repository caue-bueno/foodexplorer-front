import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  margin-top: 1rem;
  /* border: 1px solid white; */
  
  @media (min-width: ${BREAKPOINTS.XSM}){
    margin: 1rem 2.4rem 0;
    
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
  /* border: 1px solid red; */
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  /* height: 31.6rem; */
 
  margin: 0 auto 1.6rem;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  /* border: 1px solid yellow; */

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
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem;
  justify-content: center;
  margin-bottom: 2.4rem;

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