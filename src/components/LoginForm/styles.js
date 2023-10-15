import styled from "styled-components";

export const Container = styled.form`
  width: 47.6rem;
  margin: 0 auto;
  padding: 6.4rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  /* border: 1px solid white; */
  border-radius: 1.6rem;

  
  > a {
    margin: 0 auto;
  }

  @media (min-width: 1200px) {
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  margin: 0 10.8rem 0; 
  }

`;

export const Title = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 32px;
  line-height: 140%;
  align-self: center;
  display: none;

  @media (min-width: 1200px) {
  display: block;  
  }
`;