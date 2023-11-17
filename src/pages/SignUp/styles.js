/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: ${BREAKPOINTS.MD}) {
      width: 70rem;
      margin: 0 auto;
      flex-direction: row;
      gap: 2rem;
    }

    @media (min-width: ${BREAKPOINTS.LG}) {
      width: 102rem;
      justify-content: space-between;
      padding: 0 4rem;
    }

    @media (min-width: ${BREAKPOINTS.XLG}) {
      padding: 0;
    }
}

`;
