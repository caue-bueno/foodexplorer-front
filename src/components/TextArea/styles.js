import styled from 'styled-components';

export const Container = styled.div`
  
  > div {
    width: 100%;
    margin-top: 12px;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    > textarea {
      width: 100%;
      height: 17.2rem;
      padding: 1.6rem 1.4rem;
      background-color: transparent;
      border: none;
      border-radius: 8px;
      outline: none;
      resize: none;
    }
}
`;