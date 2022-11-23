import styled, { createGlobalStyle } from "styled-components";
import { ThemeParameters } from "types/style.type";
import ArrowDown from "assets/img/arrow_download_regular.svg";
import RobotoRegularWoff from 'assets/fonts/roboto_regular.woff'
import RobotoRegularWoff2 from 'assets/fonts/roboto_regular.woff2'
import RobotoMediumWoff from 'assets/fonts/roboto_medium.woff'
import RobotoMediumWoff2 from 'assets/fonts/roboto_medium.woff2'
import RobotoThinItalicWoff from 'assets/fonts/roboto_thin_italic.woff'
import RobotoThinItalicWoff2 from 'assets/fonts/roboto_thin_italic.woff2'
import { setDimensions } from "utils/mixins";

const GlobalStyle = createGlobalStyle<ThemeParameters>`
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src:  local('Roboto'),
        url(${RobotoRegularWoff2}) format('woff2'),
        url(${RobotoRegularWoff}) format('woff');
}

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  src:  local('Roboto'),
        url(${RobotoMediumWoff2}) format('woff2'),
        url(${RobotoMediumWoff}) format('woff');
}

@font-face {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 100;
  src:  local('Roboto'),
        url(${RobotoThinItalicWoff2}) format('woff2'),
        url(${RobotoThinItalicWoff}) format('woff');
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
  height: 100%;

  font-family: 'Roboto', Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.font.regular };
  line-height: 18px;
  color: ${({ theme }) => theme.color.lightSecondary};

  background-color: ${({ theme }) => theme.color.white};
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

textarea {
  resize: none;
}

/* firefox placeholder \ invalid fix + ios bdrs */
input {
  border-radius: 0;
}

input::placeholder {
  opacity: 1;
}

input:invalid {
  box-shadow: none;
}

textarea {
  border-radius: 0;
}

textarea::placeholder {
  opacity: 1;
}

textarea:invalid {
  box-shadow: none;
}

select {
  border-radius: 0;
}

/* chrome search X removal */
input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
  appearance: none;
}

/* input[number] arrows removal */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  margin: 0;

  appearance: none;
}

input[type='number'] {
  appearance: textfield;
}

/* ios button \ inputs reset */
select,
textarea,
input:matches([type='email'], [type='number'], [type='password'], [type='search'], [type='tel'], [type='text'], [type='url']) {
  appearance: none;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
  appearance: none;
}

.visually-hidden {
  position: absolute;

  width: 1px;
  height: 1px;
  margin: -1px;

  clip: rect(0 0 0 0);
}
`;

const Calendar = styled.main`
  position: relative;
  ${setDimensions(1440, 800)};
  margin: 30px;

  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
`;

const CalendarButton = styled.button`
  position: absolute;
  top: 16px;
  right: 27px;
  padding: 11px 16px 11px 44px;

  border: ${({ theme }) => `1px solid ${theme.color.lightOutlineTwo}`};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 10px;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.lightOutlineTwo};
  }

  &::before {
    position: absolute;
    top: 10px;
    left: 16px;

    ${setDimensions(20, 20)};

    content: '';
    background-image: url(${ArrowDown});
  }
`;

export {
  GlobalStyle,
  Calendar,
  CalendarButton,
};
