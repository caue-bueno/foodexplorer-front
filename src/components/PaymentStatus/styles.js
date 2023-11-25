import styled from "styled-components";

export const Container = styled.div`
  
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    line-height: 160%;
    font-weight: bold;
    text-align: center;
  }
`;

export const Image = styled.div`
  width: 9.6rem;
  height: 9.6rem;
  margin-bottom: 2.4rem;
  background-image: url(${({ $imagePath }) => $imagePath});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;
