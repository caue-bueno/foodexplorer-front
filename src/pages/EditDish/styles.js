import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  

  @media (min-width: ${BREAKPOINTS.LG}) {
    margin: 4rem;
  }

  @media (min-width: ${BREAKPOINTS.XLG}) {
    margin: 4rem 12rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 3.2rem;
  margin-bottom: 2rem;

  @media (min-width: ${BREAKPOINTS.MD}) {
    width: 33.9rem;
    margin-left: auto;
  }
`;