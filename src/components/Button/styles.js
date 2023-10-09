import styled from "styled-components";

export const Container = styled.button`
  padding: 12px 0;
  border: 0;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }
`;