import styled from "styled-components";

export const Container = styled.div`
  grid-area: footer;

  height: 7.7rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  
  > div {
    height: 7.7rem;
    /* border: 1px solid white; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.9rem 2.7rem;

  }

  span {
    font-size: 12px;
    margin-left: .5rem;
  }
`;