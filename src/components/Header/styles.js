import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
  grid-area: header;

  height: 14.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5.6rem 2.8rem 0;
    border: 1px solid green;
  }
  &[data-is-admin="true"] {
      > div {
        justify-content: stretch;
      }
    }

    @media (min-width: ${BREAKPOINTS.LG}) {
      > div {
        margin: 2.9rem 12.3rem 0;
      }
    }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  &[data-is-admin="true"] {
    margin: 0 auto;
  }

  @media (min-width: ${BREAKPOINTS.LG}) {
    img {
      width: 200px;
    }
  }
`;

export const Search = styled.div`
  width: 58.1rem;
  height: 4.8rem;
  display: none;

  @media (min-width: ${BREAKPOINTS.LG}) {
    display: block;
  }
`;

export const MenuButton = styled.button`
  border: none;
  background: none;
  height: 2rem;

  @media (min-width: ${BREAKPOINTS.LG}) {
    display: none;
  }
`;

export const Cart = styled.button`
  position: relative;
  border: none;
  background: none;
  height: 2.2rem;


  &[data-is-admin="true"] {
    display: none;
  }

  @media (min-width: ${BREAKPOINTS.LG}) {
    /* background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    height: 5.6rem;
    width: 21.6rem;
    border-radius: .5rem; */
    display: none;
  }
`;

export const Amount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  
  top: -6px;
  right: -6px;
  height: 1.8rem;
  width: 1.8rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  border-radius: 50%;

  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 14px;
  line-height: 24px;
`;

export const OrderButton = styled.button`
  display: none;

  @media (min-width: ${BREAKPOINTS.LG}) {
  
  display: flex;
  justify-content: center;
  padding-top: 1.6rem;
  gap: .8rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  height: 5.6rem;
  width: 21.6rem;
  border-radius: .5rem;
  border: none;


  :focus {
        outline: transparent;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`;

export const SignOutButton = styled.button`
  display: none;
  
  @media (min-width: ${BREAKPOINTS.LG}) {
    display: block;
    border: none;
    background: none;
    height: 2rem;
  }
`;