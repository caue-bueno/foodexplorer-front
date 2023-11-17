import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/breakpoints';

export const Container = styled.div`
  
  > div {
    width: 100%;
    margin-top: 1.2rem;
    border-radius: 8px;
    padding: 1.3rem 1.2rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    label {
      display: flex;
      font-family: 'Poppins', sans-serif;
      font-weight: medium;
      font-size: 1.4rem;
      line-height: 2.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      align-items: center;

      img {
        margin-right: 10px;
      }
    }
    
    input {
      display: none;
    }
}

@media (min-width: ${BREAKPOINTS.MD}) {
  min-width: fit-content;
}
`;