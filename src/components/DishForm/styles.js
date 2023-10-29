import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.form`
  /* margin: 7.3rem auto 0; */
  /* width: 31.6rem; */
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  /* border: 1px solid red; */

  /* > a {
    margin: 0 auto;
  } */

  /* @media (min-width: ${BREAKPOINTS.MD}) {
  width: 47.6rem;
  padding: 6.4rem;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  margin: 0 10.8rem 0; 
  } */
`;

export const Title = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 28px;
  line-height: 140%;
  margin-top: 2.4rem;
  

  /* @media (min-width: ${BREAKPOINTS.MD}) {
  display: block;  
  } */
`;