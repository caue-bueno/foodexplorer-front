import styled from "styled-components";

export const Container = styled.div`
  height: 5.4rem;
  padding: 1rem;

  font-family: var(--font-poppins);
  font-size: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_900};
`;