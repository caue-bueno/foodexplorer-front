import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/breakpoints';

export const Container = styled.div`
  display: flex;
  height: 4.4rem;
  width: 27.8rem;

  h1 {
    font-family: var(--font-roboto);
    font-weight: bold;
    font-size: 37px;
  }

  img {
    margin-right: 1.1rem;
  }

  @media (min-width: ${BREAKPOINTS.LG}) {
  margin-right: auto;
  }

`;
