import styled from "styled-components";

export const Container = styled.div`
  grid-area: menuheader;

  display: flex;
  padding: 5.6rem 2.8rem ;
  height: 14.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  align-items: center;

  font-family: 'Roboto', sans-serif;
  font-size: 21px;


  > div {
    display: flex;
  }

  img {
    margin-right: 1.6rem;
  }
`;