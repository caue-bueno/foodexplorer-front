/* eslint-disable no-unused-vars */
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid white; */
  align-items: center;
  margin-top: 15.8rem;
  margin-bottom: 5rem;

  @media (min-width: 1200px) {
    width: 140rem;
    margin: 15.8rem auto 0;
    flex-direction: row;
    gap: 10rem;
  }

  @media (min-width: 2480px) {
    margin-top: 25.8rem;
  }
`;
