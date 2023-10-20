import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 114px auto;

  grid-template-areas:
  "menuheader"
  "content"
  "footer";

  width: 100%;
  position: absolute;
  display: none;

  &[data-menu-is-open="true"] {
    display: block;
  }

`;

export const Header = styled.div`
  grid-area: menuheader;

  display: flex;
  padding-left: 2.8rem;
  height: 11.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  align-items: center;

  font-family: 'Roboto', sans-serif;
  font-size: 2.1rem;

  > div {
    display: flex;
    align-items: center;
    margin-top: 5rem;

  }
`;

export const Button = styled.button`
  border: none;
  background: none;
  height: 18px; 
  margin-right: 1.6rem;

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

export const Footer = styled.div`
`;