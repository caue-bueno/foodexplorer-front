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
  top: 0;
  z-index: 1;

  transform: translateX(-100%);
  transition: transform .4s ease-in-out;

  &[data-menu-is-open="true"] {
    transform: translateX(0);
  }
`;

export const Header = styled.div`
  grid-area: menuheader;

  display: flex;
  padding-left: 2.8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  align-items: center;

  font-family: var(--font-roboto);
  font-size: 2.1rem;

  > div {
    display: flex;
    align-items: center;
    height: 4.6rem;
    margin-top: 3.6rem;
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

  min-height: calc(100vh - 114px - 77px);

  background-color: ${({ theme }) => theme.COLORS.DARK_100};
  padding: 3.6rem 2.8rem 1.3rem;
`;

export const Wrapper = styled.div`
  margin-top: 3.6rem;
`;
