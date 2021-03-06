import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`  
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

body {
   -webkit-font-smoothing: antialised; 
}

body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
}
`
