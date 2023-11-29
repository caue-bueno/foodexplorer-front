import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
  display: flex;
  padding: 2.6rem .5rem 0;
  height: 100%;
  position: relative;

  @media (min-width: ${BREAKPOINTS.SM}) {
    padding: 4.6rem 1.9rem 0;
  }

  @media (min-width: ${BREAKPOINTS.XLG}) {
    padding: 4.6rem 10.9rem 0;
  }

  @media (min-width: ${BREAKPOINTS.XXLG}) {
    padding: 4.6rem 15.9rem 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;

  label {
    font-family: var(--font-poppins);
    font-size: 3.2rem;
    line-height: 140%;
  }

  p {
      font-family: var(--font-poppins);
      font-size: 2rem;
      font-weight: medium;
      line-height: 160%;
  }

 > div:last-child {
    width: 21.6rem;
    position: absolute;
    bottom: 1.5rem;
    right: 1.9rem;

    @media (min-width: ${BREAKPOINTS.LG}) {
      display: none;
    }
  }

> div:nth-last-child(2) {
  margin-top: 1.6rem;
}

@media (min-width: ${BREAKPOINTS.LG}) {
 width: 50%;
}
`;

export const Item = styled.div`
  display: flex;
  width: 100%;
  height: 10.4rem;
  margin-top: 2.7rem;
  gap: 1.3rem;
  align-items: center;
  /* border: 1px solid red; */

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 5.1rem;
  /* border: 1px solid yellow; */

    div {
      display: flex;
      align-items: center;
  /* border: 1px solid red; */
    }

    p {
        font-size: 1.6rem;

      @media (min-width: ${BREAKPOINTS.SM}) {
        font-size: 2rem;
      }
    }

    span {
      min-width: 4.7rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-family: var(--font-roboto);
      font-size: 1.2rem;
      margin-left: .5rem;
    }
  }
`

export const DishPhoto = styled.div`
  width: 7.2rem;
  height: 7.2rem;
  background-image: url(${({ $imagePath }) => $imagePath});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const ButtonText = styled.div`
  display: flex;
  margin-top: .5rem;
  justify-content: start;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.TOMATO_400};
  font-family: var(--font-roboto);
  font-size: 1.2rem;
  cursor: pointer;
`;

export const PaymentBox = styled.div`
  display: none;

  @media (min-width: ${BREAKPOINTS.LG}) {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
  
    label {
      font-family: var(--font-poppins);
      font-size: 3.2rem;
      line-height: 140%;
    }
  }
`;