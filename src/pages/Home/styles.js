import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 11.4rem 78vh 7.7rem;

  grid-template-areas:
  "header"
  "content"
  "footer";
`;

export const Content = styled.div`
  grid-area: content;
  overflow: scroll;

  padding: 1rem 1.6rem 0;
  background-color: ${({ theme }) => theme.COLORS.DARK_500};
  
  @media (min-width: ${BREAKPOINTS.XSM}){
    padding: 1rem 3.2rem 0;

  }

`;