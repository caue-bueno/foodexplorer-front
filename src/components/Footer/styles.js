import styled from "styled-components";

export const Container = styled.div`
  height: 7.7rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  
  > div {
    /* border: 1px solid white; */
    display: flex;
    justify-content: space-between;
    /* width: 42.8rem; */
    align-items: center;
    padding: 2.7rem 1rem;

    @media (min-width: 435px) {
      padding: 2.9rem 2.7rem;
    }
  }

  span {
    font-size: 12px;
  }
`;