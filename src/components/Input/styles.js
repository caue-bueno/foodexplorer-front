import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/breakpoints';

export const Container = styled.div`
  
  > div {
    width: 100%;
    margin-top: 12px;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    > input {
      width: 100%;
      padding: 1.6rem 1.4rem;
      background-color: transparent;
      border: none;
      border-radius: 8px;
      outline: none;
    }
  }

  @media (min-width: ${BREAKPOINTS.MD}) {
  min-width: 22.9rem;
  width: 100%;
}
`;