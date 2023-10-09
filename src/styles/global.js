import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        -webkit-font-smoothing: antialiased;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;

        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        line-height: 24px;
        font-weight: medium;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        
    }

    input { 
        font-family: 'Roboto', sans-serif;;
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    label {
        font-family: 'Roboto', sans-serif;;
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};

    }

`;