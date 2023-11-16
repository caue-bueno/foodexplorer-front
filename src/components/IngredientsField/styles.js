import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/breakpoints';

export const Container = styled.div`
  
  > div {
    display: flex;
    margin-top: 12px;
    border-radius: 8px;
    padding: .8rem;
    gap: 1rem;
    flex-wrap: wrap;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    
  }

  @media (min-width: ${BREAKPOINTS.MD}) {
    min-width: 20rem;
    width: 100%;
  }
`;