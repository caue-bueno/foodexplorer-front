import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
  padding: 2.6rem .5rem 0;
  
  label {
    font-size: 3.2rem;
    line-height: 140%;
  }

  p {
    font-family: 'Poppins', sans-serif;
      font-size: 2rem;
      font-weight: medium;
      line-height: 160%;
  }

  @media (min-width: ${BREAKPOINTS.SM}) {
    padding: 4.6rem 1.9rem 0;
  }

  @media (min-width: ${BREAKPOINTS.XLG}) {
    padding: 4.6rem 10.9rem 0;
  }

  @media (min-width: ${BREAKPOINTS.XXLG}) {
    padding: 4.6rem 15.9rem 0;
  }
`;