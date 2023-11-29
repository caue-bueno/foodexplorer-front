import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
    
  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_600};
  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.LIGHT_500}` : 'none' };
  border-radius: .8rem;
  
  > input {
    width: 11rem;
    height: 3.2rem;
    padding: .8rem 1rem;
    border: none;
    background: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  input:focus {
        box-shadow: 0 0 0 0;  
    }

  button {
    border: none;
    background: none;
    display: flex;

    svg {
      margin-right: 10px;
    }

    .button-delete {
    color: ${({ theme }) => theme.LIGHT_100}
  }

    .button-add {
      color: ${({ theme }) => theme.LIGHT_500}
    }
  }

  button:focus {
    outline: transparent;
    box-shadow: 0 0 0 0;  
    }
`;