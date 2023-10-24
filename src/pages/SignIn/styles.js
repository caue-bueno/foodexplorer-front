/* eslint-disable no-unused-vars */
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;

  > div {
    display: flex;
    flex-direction: column;
    /* border: 1px solid white; */
    align-items: center;

    @media (min-width: 1200px) {
      width: 120rem;
      margin: 0 auto;
      flex-direction: row;
      gap: 2rem;
    }
  }
`;
