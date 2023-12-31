import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
        --font-roboto: 'Roboto', sans-serif;
        --font-poppins: 'Poppins', sans-serif;
    }
    
    input:focus, textarea:focus {
        outline: transparent;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        -webkit-font-smoothing: antialiased;
    }

    a {
        text-decoration: none;
    }

    h3 {
        font-size: 2.7rem;
        font-weight: medium;
        /* font-family: 'Poppins', sans-serif; */
        font-family: var(--font-poppins);
        line-height: 140%;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;

        /* font-family: 'Poppins', sans-serif; */
        font-family: var(--font-poppins);
        font-size: 1.4rem;
        line-height: 24px;
        font-weight: medium;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    input, textarea { 
        /* font-family: 'Roboto', sans-serif; */
        font-family: var(--font-roboto);

        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    label {
        /* font-family: 'Roboto', sans-serif; */
        font-family: var(--font-roboto);
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

`;