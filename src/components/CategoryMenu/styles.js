import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  font-size: 1.4rem;
  font-family: 'Roboto', sans-serif;


#category-select label {
  font-size: 1.6rem;
}

#select-button {
  margin-top: 1.6rem;
  display: flex;
  padding: 1.6rem;
  align-items: center;
  justify-content: space-between;

  border-radius: .5rem;
}

.not-selected {
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
}

.selected {
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
}

#chevrons {
  display: flex;
}

#chevrons [data-image="chevron-up"] {
  display: none;
}

#options-view-button:focus + #select-button, #options-view-button:checked + #select-button {
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
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_800};
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
}

.closed {
  display: none;
}

.option {
  display: flex;
  align-items: center;
  gap: .5rem;
  position: relative;
  padding: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.COLORS.DARK_800};
}

  .option:hover {
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
}

.option:has(input:checked) {
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
}

.option input[type="radio"] {
  all: unset;

  position: absolute;
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