import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/breakpoints';

export const Container = styled.div`
  
  > div {
    position: relative;
    width: 100%;
    margin-top: 12px;
    border-radius: 8px;
    margin-bottom: .8rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    > input {
      width: 100%;
      padding: 1.6rem 1.4rem;
      background-color: transparent;
      border: none;
      border-radius: 8px;
      outline: none;
    }
    
    span {
      display: none;
      position: absolute;
      bottom: -16px;
      font-family: var(--font-roboto);
      font-size: 1.2rem;
      color: ${({ theme }) => theme.COLORS.TOMATO_300};
    }
    
    input:invalid[focused=true] ~ span {
      display: block;
    }

    > div:has(input:invalid) {
      border: red 1px solid;
    }
  }

  @media (min-width: ${BREAKPOINTS.MD}) {
  min-width: 18rem;
  width: 100%;
}
`;