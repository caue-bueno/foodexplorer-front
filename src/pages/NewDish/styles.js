import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
`;

export const BackButton = styled.button`
  display: flex;
  width: 7rem;
  align-items: center;
  background: none;
  border: none;
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  font-weight: medium;

  img {
    margin-right: 5px;
    width: 8px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;


  @media (min-width: ${BREAKPOINTS.MD}) {
    flex-direction: row;
    gap: 3.2rem;
  }
`;

export const ButtonWrapper = styled.div`
  @media (min-width: ${BREAKPOINTS.MD}) {
    width: 17.2rem;
    margin-left: auto;
  }
`;