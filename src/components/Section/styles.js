import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;

  label {
    font-family: var(--font-poppins);
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1.8rem;
    font-weight: medium;
    line-height: 140%;
    margin-bottom: 2.4rem;
  }

  @media (min-width: ${BREAKPOINTS.XLG}) {
    margin-top: 4.8rem;

    label {
      font-size: 3.2rem;
    }
  }
`;