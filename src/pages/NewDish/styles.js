import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;

  @media (min-width: ${BREAKPOINTS.LG}) {
    margin: 4rem;
  }

  @media (min-width: ${BREAKPOINTS.XLG}) {
    margin: 4rem 12rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;


  @media (min-width: ${BREAKPOINTS.MD}) {
    flex-direction: row;
    gap: 1.4rem;
  }

  @media (min-width: ${BREAKPOINTS.LG}) {
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