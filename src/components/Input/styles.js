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
      background-color: transparent;
      border: none;
      outline: none;

      padding: 1.6rem 1.4rem;
  }
`;

export const InputBox = styled.div`
  

`;
