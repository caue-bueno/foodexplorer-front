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
`;

