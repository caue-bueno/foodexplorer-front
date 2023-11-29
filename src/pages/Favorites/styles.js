import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
  padding: 2.6rem .5rem 0;
  
  label {
    font-family: var(--font-poppins);
    font-size: 3.2rem;
    line-height: 140%;
  }

  p {
    /* font-family: 'Poppins', sans-serif; */
    font-family: var(--font-poppins);
      font-size: 2rem;
      font-weight: medium;
      line-height: 160%;
  }

  @media (min-width: ${BREAKPOINTS.SM}) {
    padding: 4.6rem 1.9rem 0;
  }

  @media (min-width: ${BREAKPOINTS.MD}) {
    padding: 4.6rem 1.9rem 0;

    > div {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
  }

  @media (min-width: ${BREAKPOINTS.XLG}) {
    padding: 4.6rem 10.9rem 0;
  }

  @media (min-width: ${BREAKPOINTS.XXLG}) {
    padding: 4.6rem 15.9rem 0;
  }
`;

export const Item = styled.div`
  display: flex;
  width: 100%;
  height: 10.4rem;
  margin-top: 2.7rem;
  gap: 1.3rem;
  align-items: center;
  /* border: 1px solid red; */

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 5.1rem;
  /* border: 1px solid yellow; */

    div {
      display: flex;
      align-items: center;
  /* border: 1px solid red; */
    }

    p {
        font-size: 1.6rem;

      @media (min-width: ${BREAKPOINTS.SM}) {
        font-size: 2rem;
      }
    }

  }
  
  @media (min-width: ${BREAKPOINTS.MD}) {
    width: 30rem;
  }

`