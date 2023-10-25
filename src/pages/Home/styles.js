import styled from "styled-components";

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

  background-color: grey;
`;