import styled from "styled-components";

export const Container = styled.div`
  /* display: grid;
  grid-template-rows: 11.4rem 79vh 7.7rem;

  grid-template-areas:
  "header"
  "content"
  "footer"; */
`;

export const Content = styled.div`
  /* grid-area: content; */
  overflow: auto;
  flex: 1;
  min-height: calc(100vh - 114px - 77px);

  padding: 1rem 1.6rem 0;
  background-color: ${({ theme }) => theme.COLORS.DARK_500};
`;