import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.form`
  margin: 7.3rem auto 0;
  width: 25.6rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  border-radius: 1.6rem;

  > a {
    margin: 0 auto;
  }
  
  @media (min-width: ${BREAKPOINTS.XSM}) {
    width: 31.6rem;
  }

  @media (min-width: ${BREAKPOINTS.MD}) {
  width: 47.6rem;
  padding: 6.4rem;
  
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  margin: 0 0;
  }

`;

export const Title = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 32px;
  line-height: 140%;
  align-self: center;
  display: none;

  @media (min-width: ${BREAKPOINTS.MD}) {
  display: block;  
  }
`;