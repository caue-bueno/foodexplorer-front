import styled from 'styled-components';

export const Container = styled.div`
  
  > div {
    width: 100%;
    margin-top: 12px;
    border-radius: 8px;
    padding: 1.2rem 2.4rem;
    flex-wrap: wrap;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    
  }
`;