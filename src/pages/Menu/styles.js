import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 114px auto 77px;

  grid-template-areas:
  "menuheader"
  "content"
  "footer";

  /* background-color: ${({ theme }) => theme.COLORS.DARK_100}; */

`;

export const Content = styled.div`
  grid-area: content;

  min-height: 72.6rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_100};
  padding: 3.6rem 2.8rem 1.3rem;
  
`;

export const Wrapper = styled.div`
  margin-top: 3.6rem;
`;