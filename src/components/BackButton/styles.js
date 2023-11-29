import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  width: 7rem;
  align-items: center;
  background: none;
  border: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font-family: var(--font-poppins);
  font-size: 2rem;
  font-weight: medium;

  img {
    margin-right: 5px;
    width: 1rem;
  }
`;