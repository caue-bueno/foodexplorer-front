import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 3rem 2.4rem 0;
  border: 1px solid white;

`;

export const BackButton = styled.button`
  display: flex;
  width: 7rem;
  align-items: center;
  background: none;
  border: none;

  font-family: 'Poppins', sans-serif;
  font-size: 2.4rem;
  font-weight: medium;

  img {
    margin-right: 5px;
    width: 12px;
  }
`;

export const DishPhoto = styled.div`
  width: 263px;
  height: 26.3rem;
  border: 1px solid white;
  margin: 1.6rem auto;
  background-image: url(${({ $imagePath }) => $imagePath});
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 31.6rem;
  height: 31.6rem;
  margin: 0 auto 1.6rem;
  text-align: center;
  font-family: 'Poppins', sans-serif;

  h2 {
    font-size: 2.7rem;
    font-weight: 100;
    line-height: 140%;
  }

  p {
    font-size: 1.6rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
  justify-content: center;
  margin-bottom: 2.4rem;
`;

export const Item = styled.div`
  padding: .4rem .8rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: .5rem;
  font-size: 1.4rem;
  line-height: 2.4rem;
`;