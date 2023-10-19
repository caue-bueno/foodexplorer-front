import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 114px auto 77px;

  grid-template-areas:
  "header"
  "content"
  "footer"
`;

export const Content = styled.div`
  grid-area: content;

  min-height: 72.6rem;
  background-color: grey;
`;