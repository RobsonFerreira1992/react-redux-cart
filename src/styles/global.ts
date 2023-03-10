import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

/* open-sans-regular - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/open-sans-v34-latin-regular.eot'); /* IE9 Compat Modes */
  src: url('../fonts/open-sans-v34-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/open-sans-v34-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/open-sans-v34-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/open-sans-v34-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/open-sans-v34-latin-regular.svg#OpenSans') format('svg'); /* Legacy iOS */
}
/* open-sans-700 - latin */
@font-face {
  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  src: url('../fonts/open-sans-v34-latin-700.eot'); /* IE9 Compat Modes */
  src: url('../fonts/open-sans-v34-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/open-sans-v34-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/open-sans-v34-latin-700.woff') format('woff'), /* Modern Browsers */
       url('../fonts/open-sans-v34-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/open-sans-v34-latin-700.svg#OpenSans') format('svg'); /* Legacy iOS */
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  html, body, #__next {
    height: 100%;
  }
  body, * {
    font-family: 'Open Sans', sans-serif  !important

  }

 
`

export default GlobalStyles
