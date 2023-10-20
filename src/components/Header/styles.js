import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;

  height: 14.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5.6rem 2.8rem 0;
  }
`;

export const Button = styled.button`
  border: none;
  background: none;
  height: 20px;
`;

export const Cart = styled.button`
  position: relative;
  border: none;
  background: none;
  height: 22px;
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