import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
  width: 43rem;
  /* height: 32.3rem; */
  height: fit-content;
  display: flex;
  flex-direction: column;
  /* border: 1px solid green; */
  margin-top: 2.7rem;

  
  
  label {
    font-family: var(--font-roboto);
    font-size: 1.6rem;
    line-height: 160%;
  }
  
  > div:nth-child(1) {
    display: flex;
  }

  > div:nth-child(2) {
    width: 100%;
    /* height: 24.4rem; */
    padding: 5.7rem 2.6rem;

    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
    border-top: none;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    > div {

    }

    img {
      width: 16.6rem;
      height: 16.6rem;
    }
  }

  .pressed {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
  }

  .hidden {
    display: none;
  }

  @media (min-width: ${BREAKPOINTS.XLG}) {
    width: 53rem;
  }
`;

export const PaymentButton = styled.div`
  display: flex;
  width: 50%;
  height: 8.1rem;
  justify-content: center;
  align-items: center;
  gap: .8rem;

  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
  border-top-left-radius: ${({ $border }) => $border === 'left' ? '8px' : '0'};
  border-top-right-radius: ${({ $border }) => $border === 'right' ? '8px' : '0'};

  font-family: var(--font-roboto);
  font-size: 1.6rem;

  cursor: pointer;

   img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export const Form = styled.form`
  width: 100%;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

  label {
    font-size: 1.6rem;
    line-height: 160%;
  }

  input {
    padding: 1.2rem 1.4rem;
    margin-top: .8rem;
    margin-bottom: 3.7rem;
    width: 100%;

    background: none;
    border-radius: .5rem;
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > div {
    display: flex;
    gap: 1.7rem;

    div {
      display: flex;
      flex-direction: column;
      width: 50%;
    }
  }

`;



