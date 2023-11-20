import styled from "styled-components";

export const Container = styled.div`
  margin-top: 6.2rem;
  display: flex;
  flex-direction: column;

  label {
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-size: 1.8rem;
    font-weight: medium;
    line-height: 140%;
    margin-bottom: 2.4rem;
  }
`;