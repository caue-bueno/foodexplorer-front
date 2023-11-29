import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 21rem;
  height: 29.2rem;
  padding: 1.6rem;

  div:nth-child(1) {
    display: flex;
    justify-content: end;
  }

  h4 {
    font-family: var(--font-poppins);
    font-size: 1.4rem;
    font-weight: medium;
    line-height: 24px;

    @media (min-width: ${BREAKPOINTS.XLG}) {
    font-size: 2.4rem;
    font-weight: bold;
    line-height: 140%;
    }
  }

  h3 {
    font-size: 1.4rem;

    @media (min-width: ${BREAKPOINTS.XLG}) {
      font-size: 2.4rem;
    }
  }

  p {
    color: ${({ theme }) => theme.COLORS.CAKE_400};
    font-family: var(--font-roboto);
    font-size: 1.4rem;
    line-height: 160%;
    text-align: center;
    display: none;

    @media (min-width: ${BREAKPOINTS.XLG}) {
      display: block;
    }
  }

  span {
    margin-top: 1.2rem;
    font-family: var(--font-roboto);
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.CAKE_200};

    @media (min-width: ${BREAKPOINTS.XLG}) {
      font-size: 3.2rem;
      line-height: 160%;
      
    }
  }

    @media (min-width: ${BREAKPOINTS.XLG}) {
    width: 27.7rem;
    height: 44.8rem;
    }
`;

export const Icon = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  border: none;
  background: transparent;
  background-image: url(${({ $imagePath }) => $imagePath});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: 100%;
  margin-top: -1rem;
  gap: 1.2rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
  }

  div:nth-last-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .5rem;

    @media (min-width: ${BREAKPOINTS.XLG}) {
      flex-direction: row;
      gap: 1.6rem;
    }
  }

  div > div p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;

    @media (min-width: ${BREAKPOINTS.XLG}) {
      font-size: 2rem;
      font-weight: bold;
      line-height: 160%;
    }  
  }
  
  @media (min-width: ${BREAKPOINTS.XLG}) {

  }
`;

export const DishPhoto = styled.div`
  width: 8.8rem;
  height: 8.8rem;
  margin: 0 auto;
  background-image: url(${({ $imagePath }) => $imagePath});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @media (min-width: ${BREAKPOINTS.XLG}) {
    width: 17.6rem;
    height: 17.6rem;
    }
`;

export const MinusButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  margin-right: 1.4rem;
  background-image: url(${({ $imagePath }) => $imagePath});
  background-color: transparent;
  border: none;
`;

export const PlusButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  margin-left: 1.4rem;
  background-image: url(${({ $imagePath }) => $imagePath});
  background-color: transparent;
  border: none;
`;

export const AddButton = styled.button`
  display: flex;
  width: 16.2rem;
  height: 3.2rem;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  border: none;
  border-radius: .5rem;

  p {
    font-size: 1.4rem;
    font-family: 'Poppins', sans-serif;
    line-height: 24px;
  }

  @media (min-width: ${BREAKPOINTS.XLG}) {
    width: 9.2rem;
    height: 4.8rem;
  }
`;

