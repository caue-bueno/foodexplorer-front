import styled from "styled-components";

export const Container = styled.div`
  padding: 4.6rem 1.9rem 0;

  label {
    font-size: 3.2rem;
    line-height: 140%;
  }

  /* div {
    display: flex;
    flex-direction: column;
  } */
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
      font-family: 'Poppins', sans-serif;
      font-size: 2rem;
      font-weight: medium;
      line-height: 160%;
    }

    span {
      min-width: 4.7rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-family: 'Roboto', sans-serif;
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
  justify-content: start;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.TOMATO_400};
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
`;