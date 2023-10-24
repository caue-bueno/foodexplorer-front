import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
  grid-area: footer;

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
    font-size: 1.2rem;
    margin-left: .5rem;
  }

  @media (min-width: ${BREAKPOINTS.LG}) {
    span {
    font-size: 1.4rem;
  }

  img {
      width: 200px;
    }
    
  }
`;