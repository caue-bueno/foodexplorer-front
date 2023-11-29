import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-size: 1.4rem;
  font-family: var(--font-roboto);
  

@media (min-width: ${BREAKPOINTS.MD}) {
  min-width: 20rem;
  max-width: 36.4rem;
  width: 100%;
}

label {
  font-size: 1.6rem;
}

#select-button {
  display: flex;
  padding: 1.6rem;
  height: 5rem;
  align-items: center;
  justify-content: space-between;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
}

/* .not-selected {
}

.selected {
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
} */

#chevrons {
  display: flex;
}

#chevrons [data-image="chevron-up"] {
  display: none;
}

#options-view-button:focus + #select-button 
/* #options-view-button:checked + #select-button  */
{
  outline: transparent;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.LIGHT_100};
}

#options-view-button:checked + #select-button #chevrons [data-image="chevron-down"] {
  display: none;
}

#options-view-button:checked + #select-button #chevrons [data-image="chevron-up"] {
  display: block;
}

#category-select {
  position: relative;
  margin-top: 1.2rem;
}

#options-view-button {
  all: unset;

  position: absolute;
  inset: 0;

  z-index: 3;
}

#options {
  margin-top: .25rem;
  border-radius: .5rem;
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_900};
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
}

/* #options:focus {
  background-color: ${({ theme }) => theme.COLORS.DARK_800};

} */

.closed {
  display: none;
}

.option {
  display: flex;
  align-items: center;
  gap: .5rem;
  position: relative;
  z-index: 3;
  padding: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.COLORS.DARK_900};
}

  .option:hover {
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
}

.option:has(input:checked) {
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
}

.option:has(input:focus) {
  outline: transparent;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.LIGHT_100};
}

  .option.focused {
  outline: transparent;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.LIGHT_100};
  color: red;
}


.option input[type="radio"] {
  all: unset;

  position: absolute;
  z-index: 3;

  inset: 0;
}


/* #category-select:has(#options-view-button:checked) + #options {
 display: block;
} */
`;

export const MenuDown = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  background-image: url(${({ $imagePath }) => $imagePath});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const MenuUp = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  background-image: url(${({ $imagePath }) => $imagePath});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  transform: rotate(90);
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);

`;