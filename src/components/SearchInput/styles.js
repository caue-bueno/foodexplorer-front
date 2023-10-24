import styled from 'styled-components';

export const Container = styled.div`
  
  > div {
    position:relative;
    width: 100%;
    height: 4.8rem;
    display: flex;
    align-items: center;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    .icon {
      position: absolute;
      margin-left: 1.4rem;
    }

    > input {
      width: 100%;
      padding: 1.6rem 2rem 1.6rem 5rem;
      background-color: transparent;
      border: none;
      border-radius: 8px;
      outline: none;
    }

  
}
`;