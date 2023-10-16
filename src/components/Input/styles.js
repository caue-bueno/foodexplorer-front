import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 8px;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  > input {
      width: 100%;
      padding: 1.6rem 1.4rem;
      background-color: transparent;
      border: none;
      border-radius: 8px;
      outline: none;

  }
`;

export const InputBox = styled.div`
  

`;