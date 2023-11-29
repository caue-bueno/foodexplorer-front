import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/breakpoints';

export const Container = styled.div`
  
  > div {
    position:relative;
    width: 100%;
    height: 4.8rem;
    display: flex;
    align-items: center;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    .icon {
      position: absolute;
      margin-left: 1.8rem;
      top: 13px;
    }


    > label {
      width: 100%;
      
      outline: transparent;
      box-shadow: 0 0 0 0;

      > input {
        width: 100%;
        padding: 1.6rem 2rem 1.6rem 5rem;
        background-color: transparent;
        border: none;
        border-radius: 8px;
        outline: none;
      }
    }
}

@media (min-width: ${BREAKPOINTS.XXLG}) {
  > div {
    .icon {
      margin-left: 14.8rem;
    }

    > label {
      > input {
        padding-left: 18rem;
      }
    }
  }
}
`;