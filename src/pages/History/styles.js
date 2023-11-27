import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
  padding: 5.6rem .5rem 0;
  
  label {
    font-family: 'Poppins', sans-serif;
    font-size: 3.2rem;
    line-height: 140%;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.7rem;
    margin-top: 1.7rem;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
  min-height: 11.4rem;
  padding: 1.6rem 2.1rem;

  border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 8px;

  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-size: 1.4rem;
  line-height: 160%;


  > div {
    display: flex;
    justify-content: space-between;

    > div {
      display: flex;
      align-items: center;
      gap: .8rem;
    }
  }

  @media (min-width: ${BREAKPOINTS.MD}) {
    display: none;
  }
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_300};
  border-radius: 50%;
`;

export const Table = styled.div`
  width: 100%;
  height: 10rem;
  border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;
