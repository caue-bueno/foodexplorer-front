import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
  grid-area: header;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5.6rem 2.8rem 0;
    /* border: 1px solid green; */
  }
  &[data-is-admin="true"] {
      > div {
        justify-content: stretch;
      }
    }

    @media (min-width: ${BREAKPOINTS.MD}) {
      > div {
        width: 72rem;
        margin: 2.9rem auto 0;
        justify-content: stretch;
        gap: 2.8rem;
      }
    }

    @media (min-width: ${BREAKPOINTS.LG}) {
      > div {
        width: 93rem;
        margin: 2.9rem auto 0;
        justify-content: stretch;
        gap: 2.2rem;
      }
    }

    @media (min-width: ${BREAKPOINTS.XLG}) {
      > div {
        width: 115rem;
        margin: 2.9rem auto 0;
        justify-content: stretch;
        gap: 2.6rem;
      }
    }

    @media (min-width: ${BREAKPOINTS.XXLG}) {
      > div {
        width: 147rem;
        margin: 2.9rem auto 0;
        justify-content: stretch;
        gap: 3.6rem;
      }
    }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  &[data-is-admin="true"] {
    margin: 0 auto;
  }

  @media (min-width: ${BREAKPOINTS.MD}) {
    img {
      width: 15rem;
    }

    &[data-is-admin="true"] {

      flex-direction: column;
      position: relative;
      width: 15rem;
      height: 5rem;
      margin: 1px 0;

      span {
        position: absolute;
        bottom: 3px;
        right: 3px;
      }

      img {
        position: absolute;
        top: -5px;
        width: 15rem;
      }
    }
  }

  @media (min-width: ${BREAKPOINTS.LG}) {
    img {
      width: 20rem;
    }
    
    &[data-is-admin="true"] {
      width: 25rem;
      
      span {
        right: 15px;
        bottom: 0;
      }

      img {
      top: -12px ;
      width: 20rem;
    }
  } 
  
  @media (min-width: ${BREAKPOINTS.XLG}) {
    &[data-is-admin="true"] {
      span {
        right: 28px;
      }
    }
  }
}
`;

export const Search = styled.div`
  min-width: 31.6rem;
  height: 4.8rem;
  display: none;
  

  @media (min-width: ${BREAKPOINTS.MD}) {
    display: block;
  }

  @media (min-width: ${BREAKPOINTS.XXLG}) {
    min-width: 58.1rem;
  }
`;

export const MenuButton = styled.button`
  border: none;
  background: none;
  height: 2rem;

  @media (min-width: ${BREAKPOINTS.MD}) {
    display: none;
  }
`;

export const ButtonText = styled.button`
  display: none;

  @media (min-width: ${BREAKPOINTS.MD}) {
    
    display: block;
    border: 0;
    background: none;
    cursor: pointer;

    label {
      display: none;
    }
  }

  @media (min-width: ${BREAKPOINTS.XLG}) {
    img {
      display: none;
    }

    label {
      display: block;
      cursor: pointer;
    }
  }

  `;

export const Cart = styled.button`
  position: relative;
  border: none;
  background: none;
  height: 2.2rem;

  @media (min-width: ${BREAKPOINTS.LG}) {
    display: none;
  }
`;

export const Amount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  
  top: -6px;
  right: -6px;
  height: 1.8rem;
  width: 1.8rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  border-radius: 50%;

  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 14px;
  line-height: 24px;
`;

export const OrderButton = styled.button`
  display: none;

  &:focus {
        outline: transparent;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.LIGHT_100};
    }

  @media (min-width: ${BREAKPOINTS.LG}) {
  
  display: flex;
  justify-content: center;
  padding-top: 1.6rem;
  gap: .8rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  height: 5.6rem;
  width: 16.6rem;
  border-radius: .5rem;
  border: none;
  }

  @media (min-width: ${BREAKPOINTS.LG}) {
    width: 21.6rem;
  }
`;

export const SignOutButton = styled.button`
  display: none;
  
  @media (min-width: ${BREAKPOINTS.MD}) {
    display: block;
    border: none;
    background: none;
    height: 3.5rem;
  }
`;