import styled from "styled-components"
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
  padding-left: 8px;

  @media (min-width: ${BREAKPOINTS.LG}){
    padding: 0 12.4rem;
  }

  @media (min-width: ${BREAKPOINTS.XLG}) {
    padding: 2rem 12.4rem 0 ;
  }

  #swiper {
    /* width: 46rem; */
    /* display: flex;
    justify-content: center; */
  }

  .swiper-slide {
    /* border: 1px solid green; */
    width: auto;
    /* display: flex; */
    /* justify-content: center; */
  }

  
`;

