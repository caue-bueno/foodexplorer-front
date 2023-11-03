import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BackButton = styled.button`
  display: flex;
  width: 7rem;
  align-items: center;
  background: none;
  border: none;
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  font-weight: medium;

  img {
    margin-right: 5px;
    width: 8px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 3.2rem;
  margin-bottom: 2rem;
`;