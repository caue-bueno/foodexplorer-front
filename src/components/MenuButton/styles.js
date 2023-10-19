import styled from "styled-components";

export const Container = styled.div`
  height: 5.4rem;
  padding: 1rem;

  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_900};
`;