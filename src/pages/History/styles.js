import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
  padding: 5.6rem .5rem 0;
  
  label {
    font-family: var(--font-poppins);
    font-size: 3.2rem;
    line-height: 140%;
  }

  span {
    display: none;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
    margin-top: 1.7rem;
  }

  @media (min-width: ${BREAKPOINTS.MD}) {
    span {
      display: inline;
    }
  }

  @media (min-width: ${BREAKPOINTS.XLG}) {
    padding: 5.6rem 12rem 0;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
  min-height: 11.4rem;
  padding: 1.6rem 1.1rem;

  border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 8px;

  font-family: var(--font-roboto);
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-size: 1.4rem;
  line-height: 160%;


  > div {
    display: flex;
    gap: 1rem;

    > div {
      display: flex;
      align-items: center;
      gap: .8rem;
    }
  }

  @media (min-width: ${BREAKPOINTS.XSM}) {
    padding: 1.6rem 2.1rem;

    > div {
      gap: 3.1rem;
    }
  }

  @media (min-width: ${BREAKPOINTS.MD}) {
    display: none;
  }
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${({ theme, $status }) => $status === 1 ? theme.COLORS.TOMATO_300 : $status === 2 ? theme.COLORS.CARROT_100 : theme.COLORS.MINT_100 };
  border-radius: 50%;
`;

export const Table = styled.div`
  width: 100%;
  
  > div:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  }
`;

export const Header = styled.div`
  display: none;

  h1 {
    font-family: var(--font-roboto);
    font-size: 1.4rem;
    line-height: 160%;
  }
  
  > div {
    padding: 2.1rem 1.2rem;
  }

  > div:nth-child(1) {
    width: 15%;
    border-top-left-radius: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-top-width: 2px;
    border-left-width: 2px;
  }
  > div:nth-child(2) {
    width: 15%;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-top-width: 2px;

  }
  > div:nth-child(3) {
    width: 55%;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-top-width: 2px;

  }
  > div:nth-child(4) {
    width: 15%;
    border-top-right-radius: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-top-width: 2px;
    border-right-width: 2px;
  }

  @media (min-width: ${BREAKPOINTS.MD}) {
    display: flex;
  }

  @media (min-width: ${BREAKPOINTS.XLG}) {
    > div {
      padding: 2.1rem 2.4rem;
    }

    > div:nth-child(1) {
    width: 12%;
    }
    > div:nth-child(2) {
      width: 12%;
    }
    > div:nth-child(3) {
      width: 61%;
    }
    > div:nth-child(4) {
      width: 15%;
    }
  }
`;

export const Row = styled.div`
  display: none;

  font-family: var(--font-roboto);
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-size: 1.4rem;
  line-height: 160%;

  > div {
    padding: 0 1.2rem;
    min-height: 6.7rem;
    display: flex;
    align-items: center;
    gap: .8rem;
  }

  > div:nth-child(1) {
    width: 15%;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-left-width: 2px;
    
  }
  > div:nth-child(2) {
    width: 15%;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  }
  > div:nth-child(3) {
    width: 55%;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  }
  > div:nth-child(4) {
    width: 15%;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-right-width: 2px;
  }

  @media (min-width: ${BREAKPOINTS.MD}) {
    display: flex;
  }

  @media (min-width: ${BREAKPOINTS.XLG}) {
    
    > div {
      padding: 2.1rem 1.6rem;
    }

    > div:nth-child(1) {
      width: 12%;    
    }
    > div:nth-child(2) {
      width: 12%;
    }
    > div:nth-child(3) {
      width: 61%;
    }
    > div:nth-child(4) {
      width: 15%;
    }
  }
`;
