import styled from "styled-components";
import { BREAKPOINTS } from "../../../../styles/breakpoints";

export const Container = styled.div`
  /* grid-area: footer; */
  height: 7.7rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  
  > div {
    height: 7.7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.9rem 2.7rem;
  }

  span {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    
    font-family: 'DM Sans', sans-serif;
    
    font-size: 1.2rem;
    margin-left: 1rem;
  }

  @media (min-width: ${BREAKPOINTS.MD}) {
    > div {
      margin: 0 12.3rem;
    }

    span {
    font-size: 1.4rem;
  }

  img {
      width: 150px;
    }
  }

  @media (min-width: ${BREAKPOINTS.LG}) {
    img {
      width: 200px;
    }
  }

`;